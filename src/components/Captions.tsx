import { convertSecondsToClockFormat } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

interface Props {
  captionsLog: TextTrackCue[];
}
const Captions = ({ captionsLog }: Props) => {
  return (
    <>
      {captionsLog.length > 0 && (
        <ul className="flex flex-col gap-2">
          Captions:
          {captionsLog.map(
            (caption: TextTrackCue & { text?: string }, index) => (
              <li key={index}>
                <p className="flex items-center">
                  • {convertSecondsToClockFormat(caption.startTime)}{" "}
                  <ArrowRight className="size-3" />
                  {convertSecondsToClockFormat(caption.endTime)}
                </p>
                <p className="">{caption.text}</p>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Captions;
