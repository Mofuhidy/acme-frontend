const LANDING_SECTION_IDS = [
  "hero",
  "features",
  "pricing",
  "cta",
  "your-data",
  "trusted-logos",
  "integrations",
  "testimonials",
  "footer",
] as const;

const TRACKED_SECTION_IDS = [
  "hero",
  "features",
  "pricing",
  "cta",
  "your-data",
  "trusted-logos",
  "integrations",
  "testimonials",
] as const;

type LandingSectionId = (typeof LANDING_SECTION_IDS)[number];
type TrackedSectionId = (typeof TRACKED_SECTION_IDS)[number];

export { LANDING_SECTION_IDS, TRACKED_SECTION_IDS };
export type { LandingSectionId, TrackedSectionId };
