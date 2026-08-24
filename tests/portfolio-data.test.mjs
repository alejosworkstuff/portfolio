import { readFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const source = await readFile(join(process.cwd(), "lib", "projects.ts"), "utf8");
const slugs = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);

test("portfolio project catalog has unique, complete entries", () => {
  assert.equal(slugs.length, 5);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.match(source, /export function getProject\(slug: string\)/);
  assert.doesNotMatch(source, /liveUrl:\s*["']\s*["']/);
  assert.doesNotMatch(source, /repoUrl:\s*["']\s*["']/);
});
