import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CaptionData {
  captionStartMinutes: number;
  captionStartSeconds: number;
  captionEndMinutes: number;
  captionEndSeconds: number;
  captionText: string;
}

interface CueData {
  captionStart: number;
  captionEnd: number;
  captionText: string;
}

interface Props {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  setCaptionsLog: Dispatch<SetStateAction<TextTrackCue[]>>;
}

const Form = ({ videoRef, setCaptionsLog }: Props) => {
  const { toast } = useToast();

  const [captionData, setCaptionData] = useState<CaptionData>({
    captionStartMinutes: 0,
    captionStartSeconds: 0,
    captionEndMinutes: 0,
    captionEndSeconds: 0,
    captionText: "",
  });

  const addCue = ({ captionStart, captionEnd, captionText }: CueData) => {
    videoRef.current?.textTracks[0].addCue(
      new VTTCue(captionStart, captionEnd, captionText)
    );

    setCaptionsLog(
      Object.values(videoRef.current?.textTracks?.[0]?.cues || "")
    );

    toast({
      variant: "default",
      title: "Caption successfully added.",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    let captionStart =
      captionData.captionStartMinutes * 60 + captionData.captionStartSeconds;
    let captionEnd =
      captionData.captionEndMinutes * 60 + captionData.captionEndSeconds;

    if (captionStart >= captionEnd) {
      toast({
        variant: "destructive",
        title: "Invalid caption:",
        description: "End time cannot be before start time.",
      });
      return;
    }

    addCue({ captionStart, captionEnd, captionText: captionData.captionText });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-2 items-center">
        <label>Caption starts at:</label>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Input
              className="w-fit text-base"
              type="number"
              id="captionStartMinutes"
              name="captionStartMinutes"
              value={captionData.captionStartMinutes}
              min="0"
              max="59"
              onChange={(e) =>
                setCaptionData((prev) => {
                  return {
                    ...prev,
                    captionStartMinutes: Number(e.target.value),
                  };
                })
              }
              required
            />
            <p>Minutes</p>
          </div>

          <div className="flex items-center gap-2">
            <Input
              className="w-fit text-base"
              type="number"
              id="captionStartSeconds"
              name="captionStartSeconds"
              value={captionData.captionStartSeconds}
              min="0"
              max="59"
              onChange={(e) =>
                setCaptionData((prev) => {
                  return {
                    ...prev,
                    captionStartSeconds: Number(e.target.value),
                  };
                })
              }
              required
            />
            <p>Seconds</p>
          </div>
        </div>
      </div>

      <div className="grid gap-2 items-center">
        <label>Caption ends at:</label>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Input
              className="w-fit text-base"
              type="number"
              id="captionEndMinutes"
              name="captionEndMinutes"
              value={captionData.captionEndMinutes}
              min="0"
              max="59"
              onChange={(e) =>
                setCaptionData((prev) => {
                  return {
                    ...prev,
                    captionEndMinutes: Number(e.target.value),
                  };
                })
              }
              required
            />
            <p>Minutes</p>
          </div>

          <div className="flex items-center gap-2">
            <Input
              className="w-fit text-base"
              type="number"
              id="captionEndSeconds"
              name="captionEndSeconds"
              value={captionData.captionEndSeconds}
              min="0"
              max="59"
              onChange={(e) =>
                setCaptionData((prev) => {
                  return {
                    ...prev,
                    captionEndSeconds: Number(e.target.value),
                  };
                })
              }
              required
            />
            <p>Seconds</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label>Caption text:</label>
        <Textarea
          placeholder="Enter your caption here"
          className="resize-none text-base"
          id="captionText"
          name="captionText"
          value={captionData.captionText}
          onChange={(e) =>
            setCaptionData((prev) => {
              return {
                ...prev,
                captionText: e.target.value,
              };
            })
          }
          required
        />
      </div>

      <Button type="submit" className="w-fit">
        Add new caption
      </Button>
    </form>
  );
};

export default Form;
