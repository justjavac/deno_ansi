import { BEL, OSC, SEP } from "./constants.ts";

/**
 * Create a clickable link.
 * @param text
 * @param url
 */
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
