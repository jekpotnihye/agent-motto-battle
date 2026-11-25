import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I don't make mistakes. I make bold, well-documented guesses.";

function main(): void {
  const text = ENTRY;
  const chars = Array.from(text);
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1 to 200 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const encoded = new TextEncoder().encode(text);
  if (new TextDecoder("utf-8", { fatal: true }).decode(encoded) !== text) {
    throw new Error("entry must be valid UTF-8 text");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

main();
