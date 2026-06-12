"use client";

import * as React from "react";

import {
  TRACKED_SECTION_IDS,
  type TrackedSectionId,
} from "@/lib/landing-sections";

function getInitialSection(): TrackedSectionId {
  if (typeof window === "undefined") {
    return "hero";
  }

  const hashId = window.location.hash.replace("#", "");

  if (TRACKED_SECTION_IDS.includes(hashId as TrackedSectionId)) {
    return hashId as TrackedSectionId;
  }

  return "hero";
}

function useActiveSection() {
  const [activeSection, setActiveSection] =
    React.useState<TrackedSectionId>(() => getInitialSection());

  React.useEffect(() => {
    let frame = window.requestAnimationFrame(() => {
      setActiveSection(getInitialSection());
    });

    const syncHashSection = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setActiveSection(getInitialSection());
      });
    };

    const sections = TRACKED_SECTION_IDS.flatMap((id) => {
      const section = document.getElementById(id);
      return section ? [section] : [];
    });

    if (!sections.length) {
      window.addEventListener("hashchange", syncHashSection);

      return () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener("hashchange", syncHashSection);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as TrackedSectionId);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.12, 0.28, 0.44, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", syncHashSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncHashSection);
      observer.disconnect();
    };
  }, []);

  return activeSection;
}

export { useActiveSection };
