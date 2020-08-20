import { ESC } from "./constants.ts";

export function scrollUp(): string {
  return ESC + "S";
}

export function scrollDown(): string {
  return ESC + "T";
}
