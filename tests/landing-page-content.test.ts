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

assert.ok(siteConfig.integrations, "integrations content is required");
assert.equal(siteConfig.integrations.apps.length, 8);
assert.ok(siteConfig.integrations.apps.every((app) => app.name.length > 0));
assert.ok(siteConfig.integrations.cta.href.startsWith("#"));

assert.deepEqual(
  siteConfig.statistics.map((stat) => stat.label),
  ["Active teams", "Tasks organized", "Faster planning", "Uptime"]
);
assert.ok(siteConfig.statistics.every((stat) => stat.value.length > 0));

assert.deepEqual(
  siteConfig.howItWorks.map((step) => step.title),
  ["Capture the work", "Align the team", "Deliver with confidence"]
);
assert.ok(siteConfig.howItWorks.every((step) => step.description.length > 0));

assert.equal(siteConfig.testimonials.length, 3);
assert.ok(
  siteConfig.testimonials.every(
    (testimonial) =>
      testimonial.quote.length > 0 &&
      testimonial.author.length > 0 &&
      testimonial.role.length > 0
  )
);

assert.equal(siteConfig.resources.length, 3);
assert.ok(
  siteConfig.resources.every(
    (resource) =>
      resource.title.length > 0 &&
      resource.description.length > 0 &&
      resource.href.startsWith("#")
  )
);

assert.equal(siteConfig.faqs.length, 5);
assert.ok(
  siteConfig.faqs.every((faq) => faq.question.length > 0 && faq.answer.length > 0)
);

assert.equal(siteConfig.cta.title, "Start organizing your team with whitepace");
assert.ok(siteConfig.cta.primaryCta.href.startsWith("#"));
assert.ok(siteConfig.cta.secondaryCta.href.startsWith("#"));

console.log("landing page content contract ok");
