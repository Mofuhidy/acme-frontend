import assert from "node:assert/strict";

import { siteConfig } from "@/content/landing-page";

assert.equal(siteConfig.hero.badge, "Get More Done with whitepace");
assert.match(siteConfig.hero.title, /Project Management/i);
assert.ok(siteConfig.hero.primaryCta.href.startsWith("#"));
assert.ok(siteConfig.hero.secondaryCta.href.startsWith("#"));

assert.equal(siteConfig.trustedLogos.length, 5);
assert.ok(siteConfig.trustedLogos.every((logo) => logo.name.length > 0));

assert.equal(siteConfig.features.length, 3);
assert.deepEqual(
  siteConfig.features.map((feature) => feature.id),
  ["project-management", "work-together", "extension"]
);
assert.ok(
  siteConfig.features.every(
    (feature) =>
      feature.title.length > 0 &&
      feature.description.length > 0 &&
      feature.href.startsWith("#")
  )
);

console.log("landing page content contract ok");
