import { ESC } from "./constants.ts";

/** Scroll display up one line. */
export function scrollUp(): string {
  return ESC + "S";
}

/** Scroll display down one line. */
export function scrollDown(): string {
  return ESC + "T";
}
