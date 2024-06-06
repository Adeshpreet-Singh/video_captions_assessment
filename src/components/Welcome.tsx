import React, { Dispatch, SetStateAction } from "react";
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

interface Props {
  setVideoURL: Dispatch<SetStateAction<string>>;
}

const Welcome = ({ setVideoURL }: Props) => {
  return (
    <div className="mx-4 flex flex-col text-center">
      <div className="text-center flex flex-col space-y-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl">Welcome to the</h2>
        <h1 className="self-center w-96 sm:w-9/12 md:w-8/12 xl:w-full text-5xl sm:text-6xl md:text-7xl ">
          Smart Caption Video Player!
        </h1>
      </div>

      <h3 className="my-6 text-center text-base sm:text-xl md:text-2xl xl:text-3xl">
        Watch videos and add captions effortlessly.
      </h3>

      <div className="self-center xl:self-start xl:text-left w-96 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-full">
        <div className="my-16">
          <h2 className="text-xl sm:text-2xl">Ready to dive in?</h2>

          <p>
            Just copy and paste the URL of your video into the search bar above
            and click the search icon.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl sm:text-2xl">No video URL? No problem!</h3>

          <p>Select a sample video from the dropdown menu below.</p>

          <div className="self-center xl:self-start mt-4">
            <Select onValueChange={(URL) => setVideoURL(URL)}>
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select a video" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sample Videos</SelectLabel>
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
      </div>
    </div>
  );
};

export default Welcome;
