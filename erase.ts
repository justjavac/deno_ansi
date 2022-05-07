import { ESC } from "./constants.ts";
import { cursorHorizontal, cursorUp } from "./cursor.ts";

/**
 * Erase from the current cursor position up the specified amount of rows.
 */
export function eraseLines(count: number): string {
  let clear = "";

  for (let i = 0; i < count; i++) {
    clear += eraseLine() + (i < count - 1 ? cursorUp() : "");
  }

  if (count) {
    clear += cursorHorizontal();
  }

  return clear;
}

/** Erase from the current cursor position to the end of the current line. */
export function eraseEndLine(): string {
  return ESC + "K";
}

/** Erase from the current cursor position to the start of the current line. */
export function eraseStartLine(): string {
  return ESC + "1K";
}

/** Erase the entire current line. */
export function eraseLine(): string {
  return ESC + "2K";
}

/** Erase the screen from the current line down to the bottom of the screen. */
export function eraseDown(): string {
  return ESC + "J";
}

/** Erase the screen from the current line up to the top of the screen. */
export function eraseUp() {
  return ESC + "1J";
}

/** Erase the screen and move the cursor the top left position. */
export function eraseScreen(): string {
  return ESC + "2J";
}
