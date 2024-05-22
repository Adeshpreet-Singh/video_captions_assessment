import React, { MutableRefObject, useState } from "react";
import Captions from "@/components/Captions";
import Form from "@/components/Form";
import { Button } from "@/components/ui/button";

interface Props {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}

const CaptionsSection = ({ videoRef }: Props) => {
  const [captionsLog, setCaptionsLog] = useState<TextTrackCue[]>([]);
  const [showCaptionOptions, setShowCaptionOptions] = useState(false);

  return (
    <div className="flex flex-col gap-16 w-full mt-8">
      {showCaptionOptions ? (
        <Form videoRef={videoRef} setCaptionsLog={setCaptionsLog} />
      ) : (
        <Button
          type="button"
          onClick={() => {
            setShowCaptionOptions(true);
          }}
          className="w-fit"
        >
          Show Add captions options
        </Button>
      )}

      <Captions captionsLog={captionsLog} />
    </div>
  );
};

export default CaptionsSection;
