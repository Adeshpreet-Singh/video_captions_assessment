import React, { MutableRefObject, useEffect, useState } from "react";
import Captions from "@/components/Captions";
import Form from "@/components/Form";
import { Button } from "@/components/ui/button";

interface Props {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}

const CaptionsSection = ({ videoRef }: Props) => {
  const [captionsLog, setCaptionsLog] = useState<TextTrackCue[]>([]);
  const [showCaptionOptions, setShowCaptionOptions] = useState(false);

  useEffect(() => {
    setCaptionsLog(
      Object.values(videoRef.current?.textTracks?.[0]?.cues || "")
    );
  }, [showCaptionOptions]);

  return (
    <div className="flex flex-col gap-16 lg:grid lg:grid-flow-col w-full mt-8">
      {showCaptionOptions ? (
        <>
          <Form videoRef={videoRef} setCaptionsLog={setCaptionsLog} />
          <Captions captionsLog={captionsLog} />
        </>
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
    </div>
  );
};

export default CaptionsSection;
