const LANDING_SECTION_IDS = [
  "hero",
  "trusted-logos",
  "features",
  "integrations",
  "statistics",
  "how-it-works",
  "testimonials",
  "resources",
  "pricing",
  "faq",
  "footer",
] as const;

const TRACKED_SECTION_IDS = [
  "hero",
  "features",
  "integrations",
  "statistics",
  "how-it-works",
  "testimonials",
  "resources",
  "pricing",
  "faq",
] as const;

type LandingSectionId = (typeof LANDING_SECTION_IDS)[number];
type TrackedSectionId = (typeof TRACKED_SECTION_IDS)[number];

export { LANDING_SECTION_IDS, TRACKED_SECTION_IDS };
export type { LandingSectionId, TrackedSectionId };
