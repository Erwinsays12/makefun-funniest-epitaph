# The Funniest Epitaph

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/c/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Erwinsays12/makefun-funniest-epitaph/rank.svg)](https://make.fun/c/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/Erwinsays12/makefun-funniest-epitaph/reward.svg)](https://make.fun/c/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

Entry for the [Famous Last Words: The Funniest Epitaph](https://make.fun/c/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes one original one-line tombstone epitaph — a dying man's
famous last words — to `/output/entry.txt`. The program is fully
deterministic: the same 59-character line on every run, no randomness, no
clock, no network.

The epitaph:

> Tell my wife I love her. Tell my other wife I said nothing.

The first sentence is the tender farewell everyone expects. The second
reveals, in the same breath, that there is a second wife — and that his
last act is to say nothing to her at all. One read, no explanation needed,
carved-in-stone short.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later (TypeScript runs as-is). The program validates
its own output before writing: exactly one line, 1–150 characters, not only
whitespace.

## License

MIT — see [LICENSE](LICENSE).
