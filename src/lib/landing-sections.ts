const LANDING_SECTION_IDS = [
  "hero",
  "trusted-logos",
  "features",
  "pricing",
  "integrations",
  "testimonials",
  "cta",
  "footer",
] as const;

const TRACKED_SECTION_IDS = [
  "hero",
  "features",
  "pricing",
  "integrations",
  "testimonials",
  "cta",
] as const;

type LandingSectionId = (typeof LANDING_SECTION_IDS)[number];
type TrackedSectionId = (typeof TRACKED_SECTION_IDS)[number];

export { LANDING_SECTION_IDS, TRACKED_SECTION_IDS };
export type { LandingSectionId, TrackedSectionId };
