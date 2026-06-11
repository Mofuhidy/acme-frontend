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

export const siteConfig = {
  name: "whitepace",
  description:
    "Project management and team collaboration software for productive work.",
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
