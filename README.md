# deno_ansi

[ANSI escape codes](http://www.termsys.demon.co.uk/vtansi.htm) for manipulating
the terminal.

> _base on
> [sindresorhus/ansi-escapes](https://github.com/sindresorhus/ansi-escapes)_

[Document](https://doc.deno.land/https://deno.land/x/ansi/mod.ts)

## Usage

```ts
import { cursorLeft, cursorUp } from "https://deno.land/x/ansi/mod.ts";

// Moves the cursor two rows up and to the left
console.log(cursorUp(2) + cursorLeft());
//=> '\u001B[2A\u001B[1000D'
```

## License

[deno_ansi](https://github.com/justjavac/deno_ansi) is released under the MIT
License. See the bundled [LICENSE](./LICENSE) file for details.
