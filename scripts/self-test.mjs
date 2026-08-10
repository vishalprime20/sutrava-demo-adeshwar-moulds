#!/usr/bin/env node
/**
 * Minimal self-test for Sutrava demo static sites.
 * Fails on missing required files, SAMPLE leftovers when SUTRAVA_STRICT=1,
 * and obvious secret-looking patterns.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const required = [
  "index.html",
  "styles/tokens.css",
  "styles/base.css",
  "styles/components.css",
  "styles/motion.css",
  "scripts/site.js",
  "styles/prospect.css",
  ".nojekyll",
];

const errors = [];

for (const rel of required) {
  if (!existsSync(join(root, rel))) {
    errors.push(`Missing required file: ${rel}`);
  }
}

const html = readFileSync(join(root, "index.html"), "utf8");

if (!html.includes("<title>") || !html.includes('name="description"')) {
  errors.push("index.html must include <title> and meta description");
}

if (/lorem ipsum/i.test(html)) {
  errors.push("lorem ipsum found in index.html");
}

if (/(api[_-]?key|secret_key|BEGIN (RSA |OPENSSH )?PRIVATE KEY)/i.test(html)) {
  errors.push("Possible secret material found in index.html");
}

const strict = process.env.SUTRAVA_STRICT === "1";
const isStarterSample =
  existsSync(join(root, "docs/NAMING.md")) && /SAMPLE\s*\/\s*FICTIONAL/i.test(html);

if (strict && !isStarterSample) {
  if (/SAMPLE|fictional sample|example\.invalid/i.test(html)) {
    errors.push("SAMPLE scaffolding still present — strip before prospect handoff");
  }
}

if (errors.length) {
  console.error("self-test FAILED");
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}

console.log("self-test PASS");
if (isStarterSample) {
  console.log("note: starter SAMPLE content detected (expected in sutrava-demo-starter)");
}
