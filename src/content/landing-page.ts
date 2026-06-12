export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: {
    label: string;
    href: string;
    description: string;
  }[];
};

export type FooterGroup = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type HeroContent = {
  badge: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type TrustedLogo = {
  name: string;
  shortName: string;
};

export type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const siteConfig = {
  name: "whitepace",
  description:
    "Project management and team collaboration software for productive work.",
  hero: {
    badge: "Get More Done with whitepace",
    title: "Project Management Software That Keeps Teams in Sync",
    description:
      "Whitepace brings projects, notes, goals, and collaboration into one focused workspace so teams can plan clearly and move faster.",
    primaryCta: {
      label: "Try Whitepace free",
      href: "#features",
    },
    secondaryCta: {
      label: "View workflow",
      href: "#how-it-works",
    },
    image: {
      src: "/hero-dashboard.svg",
      alt: "Whitepace dashboard showing project progress, tasks, and team activity",
      width: 1080,
      height: 760,
    },
  } satisfies HeroContent,
  trustedLogos: [
    { name: "Apple", shortName: "Apple" },
    { name: "Microsoft", shortName: "Microsoft" },
    { name: "Slack", shortName: "Slack" },
    { name: "Google", shortName: "Google" },
    { name: "Notion", shortName: "Notion" },
  ] satisfies TrustedLogo[],
  features: [
    {
      id: "project-management",
      eyebrow: "Project management",
      title: "Organize every project from idea to launch",
      description:
        "Create shared plans, assign ownership, track milestones, and keep important work visible without scattering updates across tools.",
      href: "#project-management",
      image: {
        src: "/feature-project-management.svg",
        alt: "Project board with task cards and progress indicators",
        width: 840,
        height: 620,
      },
    },
    {
      id: "work-together",
      eyebrow: "Work together",
      title: "Collaborate with context, not chaos",
      description:
        "Bring notes, comments, files, and decisions beside the work itself so every teammate understands what changed and why.",
      href: "#work-together",
      image: {
        src: "/feature-work-together.svg",
        alt: "Team collaboration illustration with connected teammates and shared notes",
        width: 840,
        height: 620,
      },
    },
    {
      id: "extension",
      eyebrow: "Use as extension",
      title: "Connect your existing workflow",
      description:
        "Plug Whitepace into the apps your team already trusts and keep your operating rhythm consistent across every department.",
      href: "#integrations",
      image: {
        src: "/feature-extension.svg",
        alt: "Integration cards connecting Whitepace with workplace apps",
        width: 840,
        height: 620,
      },
    },
  ] satisfies Feature[],
  navItems: [
    {
      label: "Products",
      href: "#features",
      children: [
        {
          label: "Project Management",
          href: "#features",
          description: "Plan, track, and organize team work in one place.",
        },
        {
          label: "Work Together",
          href: "#how-it-works",
          description: "Collaborate on tasks, notes, and milestones.",
        },
        {
          label: "Integrations",
          href: "#integrations",
          description: "Connect whitepace with the tools your team uses.",
        },
      ],
    },
    {
      label: "Solutions",
      href: "#statistics",
      children: [
        {
          label: "Remote Teams",
          href: "#testimonials",
          description: "Keep distributed teams aligned and moving.",
        },
        {
          label: "Agencies",
          href: "#resources",
          description: "Manage client work with a clear operating rhythm.",
        },
      ],
    },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
  ] satisfies NavItem[],
  footerGroups: [
    {
      title: "Product",
      links: [
        { label: "Overview", href: "#features" },
        { label: "Integrations", href: "#integrations" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Articles", href: "#resources" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#hero" },
        { label: "Contact", href: "mailto:hello@whitepace.example" },
        { label: "Privacy", href: "#footer" },
      ],
    },
  ] satisfies FooterGroup[],
};
