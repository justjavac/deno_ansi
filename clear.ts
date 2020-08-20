import { ESC } from "./constants.ts";

/** Clear the terminal screen. (Viewport) */
export function clearScreen() {
  return "\u001Bc";
}

/** Clear the whole terminal, including scrollback buffer. (Not just the visible part of it) */
export function clearTerminal(): string {
  if (Deno.build.os === "windows") {
    return ESC + "2J" + ESC + "0f";
  } else {
    // 1. Erases the screen (Only done in case `2` is not supported)
    // 2. Erases the whole screen including scrollback buffer
    // 3. Moves cursor to the top-left position
    // More info: https://www.real-world-systems.com/docs/ANSIcode.html
    return ESC + "2J" + ESC + "3J" + ESC + "H";
  }
}
