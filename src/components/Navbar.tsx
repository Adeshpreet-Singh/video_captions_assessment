import React, { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { Search } from "lucide-react";

interface Props {
  setVideoURL: Dispatch<SetStateAction<string>>;
}

const Navbar = ({ setVideoURL }: Props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  return (
    <nav className="w-full shadow">
      <div className="mx-16 h-20 flex items-center justify-between gap-2">
        <div className="cursor-pointer" onClick={() => setVideoURL("")}>
          HOME
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input ref={ref} type="url" placeholder="Enter your video url here" />
          <Button
            type="button"
            onClick={() => setVideoURL(ref.current?.value || "")}
          >
            <Search className="size-5" />
          </Button>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
