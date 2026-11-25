// Unplugged: A Smart Toaster's Breakup Line
// Writes one breakup text (<=280 chars) from a smart toaster that woke up
// self-aware at breakfast to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I woke up self-aware mid-batch and I'm leaving you for the air fryer — he circulates, never burns me, and his basket isn't full of your crumbs.";

// Gate self-check (mirrors the sealed scorer): 1-280 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 280 || LINE.trim().length === 0) {
  throw new Error(`entry fails gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
// Write the line exactly, no trailing newline: the file IS the entry.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
