import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadSubtitles(vttContent: string) {
  const a = document.createElement("a");
  const file = new Blob([vttContent], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = "subtitles.vtt";
  a.click();
  URL.revokeObjectURL(a.href);
}

export function formatTime(seconds: number) {
  const date = new Date(0);
  date.setSeconds(seconds);
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const secs = date.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = (seconds % 1).toFixed(3).substring(2, 5);
  return `${hours}:${minutes}:${secs}.${milliseconds}`;
}

export function validURL(str: string) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
