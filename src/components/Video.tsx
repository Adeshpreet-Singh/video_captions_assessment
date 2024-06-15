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
      width={1280}
      height={720}
      controls
      preload="auto"
      autoPlay
      muted
      playsInline
      src={videoURL}
    />
  );
};

export default Video;
