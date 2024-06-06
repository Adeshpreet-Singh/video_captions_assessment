"use client";

import CaptionsSection from "@/components/CaptionsSection";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import Welcome from "@/components/Welcome";
import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoURL, setVideoURL] = useState("");

  return (
    <main className="flex flex-col justify-center items-center gap-8 mb-16">
      <Navbar setVideoURL={setVideoURL} />

      {videoURL ? (
        <div className="mx-4 max-w-full xl:max-w-[75%] flex flex-col justify-center items-center">
          <Video videoURL={videoURL} videoRef={videoRef} />
          <CaptionsSection videoRef={videoRef} />
        </div>
      ) : (
        <Welcome setVideoURL={setVideoURL} />
      )}
    </main>
  );
}
