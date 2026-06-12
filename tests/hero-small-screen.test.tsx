import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import { Hero } from "@/components/sections/hero";

const markup = renderToStaticMarkup(<Hero />);

assert.match(
  markup,
  /min-\[350px\]:text-5xl/,
  "expected the hero heading to step up only after 350px",
);

assert.match(
  markup,
  /text-4xl font-bold leading-\[1\.05\]/,
  "expected the hero heading to use a smaller base size for 320px screens",
);

assert.match(
  markup,
  /text-base leading-7 text-brand-blue min-\[350px\]:text-lg min-\[350px\]:leading-8/,
  "expected the hero description to use tighter copy sizing below 350px",
);

assert.match(
  markup,
  /gap-10 py-12 min-\[350px\]:gap-12 min-\[350px\]:py-16/,
  "expected the hero section spacing to be reduced on ultra-small screens",
);

console.log("hero small screen contract ok");
