import React, { MutableRefObject } from "react";

interface Props {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  videoURL: string;
}
const Video = ({ videoRef, videoURL }: Props) => {
  return (
    <video
      id="video"
      ref={videoRef}
      width={1024}
      height={576}
      controls
      preload="none"
      autoPlay
      muted
      playsInline
      src={videoURL}
    >
      <track
        src="placeholder.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
        default
      />
    </video>
  );
};

export default Video;
