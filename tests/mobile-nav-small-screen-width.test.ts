import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(
  new URL("../src/components/layout/navbar.tsx", import.meta.url),
  "utf8",
);

assert.match(
  source,
  /className="w-screen max-w-full border-white\/10 p-0 min-\[360px\]:w-\[86vw\] min-\[360px\]:max-w-sm"/,
  "expected the mobile nav drawer to fill ultra-small screens without leaving a right gutter",
);

console.log("mobile nav small screen width contract ok");
