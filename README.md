# deno_ansi

[![tag](https://img.shields.io/github/release/justjavac/deno_ansi)](https://github.com/justjavac/deno_ansi/releases)
[![Build Status](https://github.com/justjavac/deno_ansi/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_ansi/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_ansi)](https://github.com/justjavac/deno_ansi/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

ANSI escape codes for manipulating the terminal.

> _base on [sindresorhus/ansi-escapes](https://github.com/sindresorhus/ansi-escapes)_

## Usage

```ts
import { cursorUp, cursorLeft } from "https://deno.land/x/ansi/mod.ts";

// Moves the cursor two rows up and to the left
console.log(cursorUp(2) + cursorLeft());
//=> '\u001B[2A\u001B[1000D'
```

## License

[deno_ansi](https://github.com/justjavac/deno_ansi) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
