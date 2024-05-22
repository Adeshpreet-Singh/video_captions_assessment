"use client";

import CaptionsSection from "@/components/CaptionsSection";
import Navbar from "@/components/Navbar";
import Video from "@/components/Video";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mediaJSON } from "@/lib/data";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoURL, setVideoURL] = useState("");

  return (
    <main className="flex flex-col justify-center items-center gap-8 mb-16">
      <Navbar setVideoURL={setVideoURL} />

      {videoURL ? (
        <div className="mx-8 max-w-[50%] flex flex-col justify-center items-center">
          <Video videoURL={videoURL} videoRef={videoRef} />
          <CaptionsSection videoRef={videoRef} />
        </div>
      ) : (
        <div className="">
          <h2 className="text-6xl text-center">Welcome to the</h2>
          <h1 className="mt-4 text-7xl text-center">
            Smart Caption Video Player!
          </h1>
          <h3 className="mt-12 text-2xl text-center">
            Watch videos and add captions effortlessly.
          </h3>
          <h2 className="mt-16 text-xl">Ready to dive in?</h2>
          <p className="text-xl">
            Just copy and paste the URL of your video into the search bar above
            and click the search icon.
          </p>
          <h3 className="mt-16 text-xl">No video URL? No problem!</h3>
          <p className="text-xl">
            Select a sample video from the dropdown menu below.
          </p>

          <div className="mt-4">
            <Select onValueChange={(URL) => setVideoURL(URL)}>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select a video" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  {mediaJSON.map((video, index) => (
                    <SelectItem key={index} value={video.link}>
                      {video.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </main>
  );
}
