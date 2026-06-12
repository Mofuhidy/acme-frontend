import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import { Features } from "@/components/sections/features";

const markup = renderToStaticMarkup(<Features />);

assert.match(
  markup,
  /hero-dashboard\.svg/,
  "expected the project management feature to use hero-dashboard.svg",
);

assert.doesNotMatch(
  markup,
  /feature-project-management\.svg/,
  "expected the old project management illustration to be removed",
);

console.log("features project management image contract ok");
