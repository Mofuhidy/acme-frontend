import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import { Features } from "@/components/sections/features";

const markup = renderToStaticMarkup(<Features />);

assert.match(
  markup,
  /id="project-management" class="[^"]*overflow-hidden[^"]*"/,
  "expected the project management feature row to clip decorative wave overflow",
);

console.log("project management row overflow contract ok");
