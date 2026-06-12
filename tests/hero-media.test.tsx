import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import { Hero } from "@/components/sections/hero";

const markup = renderToStaticMarkup(<Hero />);

assert.match(
  markup,
  /hero-dashboard\.svg/,
  "expected the hero section to render hero-dashboard.svg",
);

assert.doesNotMatch(
  markup,
  /bg-\[#C4DEFD\]/,
  "expected the hero placeholder box to be removed",
);

console.log("hero media contract ok");
