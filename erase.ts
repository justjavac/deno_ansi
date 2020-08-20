import { ESC } from "./constants.ts";

/**
 * Erases part of the line.
 * 
 * - If `n` is `0` (or missing), clear from cursor to the end of the line.
 * - If `n` is `1`, clear from cursor to beginning of the line.
 * - If `n` is `2`, clear entire line.
 * 
 * Cursor position does not change.
 * 
 * @param n
 */
export function eraseLines(): string {
  return ESC + "K";
}

export function eraseEndLine(): string {
  return ESC + "K";
}

export function eraseStartLine(): string {
  return ESC + "1K";
}

export function eraseLine(): string {
  return ESC + "2K";
}

export function eraseDown(): string {
  return ESC + "J";
}

export function eraseUp() {
  return ESC + "1J";
}

export function eraseScreen(): string {
  return ESC + "2J";
}
