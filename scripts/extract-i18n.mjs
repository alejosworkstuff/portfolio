import fs from "fs";

const src = fs.readFileSync("_legacy/i18n.js", "utf8");
const start = src.indexOf("const translations =");
const end = src.indexOf("window.__roadmapStrings");
const block = src
  .slice(start, end)
  .replace("const translations =", "export const translations =");

const roadmapStart = src.indexOf("window.__roadmapStrings =");
const roadmapEnd = src.indexOf("window.getI18nString");
let roadmap = src
  .slice(roadmapStart, roadmapEnd)
  .replace("window.__roadmapStrings =", "export const roadmapStrings =")
  .trim();
if (roadmap.endsWith(";")) roadmap = roadmap.slice(0, -1);

const out =
  block +
  "\n" +
  roadmap +
  " as const;\n\nexport type Lang = \"en\" | \"es\";\nexport type TranslationKey = keyof typeof translations.en;\n";

fs.writeFileSync("lib/translations.ts", out);
console.log("wrote", fs.statSync("lib/translations.ts").size);
