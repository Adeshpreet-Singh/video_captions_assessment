import { downloadSubtitles, formatTime } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface Props {
  captionsLog: TextTrackCue[];
}
const Captions = ({ captionsLog }: Props) => {
  let vttContent = "WEBVTT\n";

  captionsLog.forEach(
    (cue: TextTrackCue & { text?: string }, index: number) => {
      vttContent += `${formatTime(cue.startTime)} --> ${formatTime(
        cue.endTime
      )}\n`;
      vttContent += `${cue.text}\n\n`;
    }
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p>Captions:</p>
        <Button onClick={() => downloadSubtitles(vttContent)}>
          Download VTT file
        </Button>
      </div>

      <Textarea
        className="resize-none h-full disabled:cursor-text"
        disabled
        value={vttContent}
      ></Textarea>
    </div>
  );
};

export default Captions;
