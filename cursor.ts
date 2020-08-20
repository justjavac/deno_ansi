import { ESC } from "./constants.ts";

const isTerminalApp = Deno.env.get("TERM_PROGRAM") === "Apple_Terminal";

/**
 * moves cursor to line #, column #
 * @param x column
 * @param y line
 */
export function cursorTo(x: number, y: number): string {
  return ESC + (y + 1) + ";" + (x + 1) + "H";
}

/**
 * Set the position of the cursor relative to its current position.
 * @param x 
 * @param y 
 */
export function cursorMove(x: number, y: number): string {
  let ret = "";

  if (x < 0) {
    ret += ESC + (-x) + "D";
  } else if (x > 0) {
    ret += ESC + x + "C";
  }

  if (y < 0) {
    ret += ESC + (-y) + "A";
  } else if (y > 0) {
    ret += ESC + y + "B";
  }

  return ret;
}

/**
 * moves cursor up # lines (default `1`).
 * @param count
 */
export function cursorUp(count = 1): string {
  return ESC + count + "A";
}

/**
 * moves cursor down # lines (default `1`).
 * @param count 
 */
export function cursorDown(count = 1): string {
  return ESC + count + "B";
}

/**
 * moves cursor right # columns (default `1`).
 * @param count
 */
export function cursorForward(count = 1): string {
  return ESC + count + "C";
}

/**
 * moves cursor left # columns (default `1`).
 * @param count
 */
export function cursorBack(count = 1): string {
  return ESC + count + "D";
} /**
 * Moves the cursor to column `n` (default `1`).
 * @param count
 */

export function cursorHorizontal(count = 1): string {
  return ESC + count + "G";
}

/** saves the current cursor position */
export function cursorSavePosition(): string {
  return isTerminalApp ? "\u001B7" : ESC + "s";
}

/** restores the cursor to the last saved position */
export function cursorRestorePosition(): string {
  return isTerminalApp ? "\u001B8" : ESC + "u";
}

/** Reports the cursor position (CPR) to the application as (as though typed at the keyboard)  */
export function cursorGetPosition(): string {
  return ESC + "6n";
}

/** Moves cursor to beginning of the line n (default 1) lines down. */
export function cursorNextLine(): string {
  return ESC + "E";
}

/** Moves cursor to beginning of the line n (default 1) lines up. */
export function cursorPrevLine(): string {
  return ESC + "F";
}

/** DECTCEM Hides the cursor. */
export function cursorHide(): string {
  return ESC + "?25l";
}

/** DECTCEM Shows the cursor, from the VT320. */
export function cursorShow(): string {
  return ESC + "?25h";
}
