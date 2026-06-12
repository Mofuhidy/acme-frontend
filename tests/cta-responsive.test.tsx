import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import { Cta } from "@/components/sections/cta";

const markup = renderToStaticMarkup(<Cta />);

assert.match(
  markup,
  /id="cta" class="[^"]*overflow-hidden[^"]*"/,
  "expected the CTA section to clip decorative wave overflow on mobile",
);

assert.match(
  markup,
  /class="[^"]*-left-36[^"]*top-1\/2[^"]*-translate-y-1\/2[^"]*md:-top-64[^"]*md:translate-y-0[^"]*"/,
  "expected the CTA wave wrapper to use centered mobile positioning and desktop offsets",
);

assert.match(
  markup,
  /class="[^"]*w-\[32rem\][^"]*sm:w-\[36rem\][^"]*md:h-\[calc\(100%\+6rem\)\][^"]*md:w-auto[^"]*"/,
  "expected the CTA wave svg to use width-based mobile sizing before switching back on desktop",
);

console.log("cta responsive contract ok");
