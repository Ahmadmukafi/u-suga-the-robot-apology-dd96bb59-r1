import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The entry is exactly two lines: line 1 is the apology for one specific
// mistake (watering the laptop instead of the fern), line 2 is the lesson
// that follows from that mistake (check for a keyboard before pouring).
const line1 =
  "I am sorry I watered your laptop instead of your fern — they were both on the desk, and only one of them was thirsty.";
const line2 =
  "I learned to check for a keyboard before I pour, so from now on I water only things that cannot send emails.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, `${line1}\n${line2}`);
