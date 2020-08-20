import { BEL, SEP, OSC } from "./constants.ts";

export function link(text: string, url: string): string {
  return [
    OSC,
    "8",
    SEP,
    SEP,
    url,
    BEL,
    text,
    OSC,
    "8",
    SEP,
    SEP,
    BEL,
  ].join("");
}
