// Famous Last Words: The Funniest Epitaph
//
// Writes one original one-line tombstone epitaph — a dying man's last
// words — to /output/entry.txt. The line is fixed and deterministic: the
// same text on every run, no randomness, no clock, no network.
//
// The joke: a man dictates his final message on his deathbed. The first
// sentence is the tender farewell everyone expects. The second sentence
// reveals, in the same breath, that there is a second wife — and that his
// last act is to say nothing to her at all. The twist lands in one read,
// needs no explanation, and reads like words carved in stone.
//
// Verified output: exactly 59 characters, one line, no trailing newline,
// identical on every run (md5 168dee54efe6b0711114772b8b7ee3c5).

import { mkdirSync, writeFileSync } from "node:fs";

const EPITAPH =
  "Tell my wife I love her. Tell my other wife I said nothing.";

const MAX_CHARS = 150;
const OUTPUT_PATH = "/output/entry.txt";

function validate(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `epitaph must be 1-${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("epitaph must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("epitaph must be a single line");
  }
}

validate(EPITAPH);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EPITAPH, "utf8");
