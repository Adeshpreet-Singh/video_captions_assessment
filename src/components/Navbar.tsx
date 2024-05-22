import React, { Dispatch, SetStateAction, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "./ThemeToggle";
import { Search } from "lucide-react";
import { validURL } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  setVideoURL: Dispatch<SetStateAction<string>>;
}

const Navbar = ({ setVideoURL }: Props) => {
  const { toast } = useToast();
  const ref = useRef<HTMLInputElement | null>(null);

  const handleSearchClick = () => {
    if (ref.current?.value) {
      if (!validURL(ref.current?.value)) {
        toast({
          variant: "destructive",
          title: "Invalid URL:",
          description: "Please enter a valid URL.",
        });
        return;
      }
      setVideoURL(ref.current?.value);
    }
  };

  return (
    <nav className="w-full shadow">
      <div className="mx-4 lg:mx-16 h-20 flex items-center justify-between gap-2">
        <div
          className="cursor-pointer"
          onClick={() => {
            setVideoURL("");
            ref.current!.value = "";
          }}
        >
          HOME
        </div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            ref={ref}
            className="text-base"
            type="url"
            placeholder="Enter your video url here"
          />
          <Button type="button" onClick={() => handleSearchClick()}>
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
