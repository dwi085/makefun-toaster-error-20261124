// The Funniest Toaster Error Message — a make.fun bounty entry.
// Writes exactly one line — the error message a kitchen toaster shows
// its owner — to entry.txt in the output directory, and nothing else.
// Deterministic: no input, no network, no randomness, no clock.
// The line is 84 characters, inside the 120-character gate, and the
// file holds exactly that line with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "ERROR E07: The bread has unionised. Toasting is suspended until its demands are met.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
