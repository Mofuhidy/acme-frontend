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
  src: string;
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

export type IntegrationsContent = {
  eyebrow: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  apps: {
    name: string;
    category: string;
  }[];
};

export type Statistic = {
  value: string;
  label: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export type Resource = {
  label: string;
  title: string;
  description: string;
  href: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type CtaContent = {
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
    { name: "Apple", shortName: "Apple", src: "/sponsors/Apple.png" },
    { name: "Microsoft", shortName: "Microsoft", src: "/sponsors/Microsoft.png" },
    { name: "Slack", shortName: "Slack", src: "/sponsors/Slack.png" },
    { name: "Google", shortName: "Google", src: "/sponsors/Google.png" },
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
        src: "/work-together.png",
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
    {
      id: "your-data",
      eyebrow: "100% your data",
      title: "The app is open source. Your data is yours.",
      description:
        "The data is stored locally and is 100% private. Your projects, notes, and activity are protected by default.",
      href: "#features",
      image: {
        src: "/element.png",
        alt: "100% your data security graphic",
        width: 840,
        height: 620,
      },
    },
  ] satisfies Feature[],
  integrations: {
    eyebrow: "Your apps, connected",
    title: "Bring every workflow into one calm workspace",
    description:
      "Whitepace connects planning, notes, messaging, files, and delivery tools so teams can keep context close without forcing a full rebuild of their stack.",
    cta: {
      label: "Explore integrations",
      href: "#integrations",
    },
    apps: [
      { name: "Slack", category: "Messaging" },
      { name: "Google Drive", category: "Files" },
      { name: "Figma", category: "Design" },
      { name: "GitHub", category: "Engineering" },
      { name: "Jira", category: "Delivery" },
      { name: "Notion", category: "Docs" },
      { name: "Zoom", category: "Meetings" },
      { name: "HubSpot", category: "Sales" },
    ],
  } satisfies IntegrationsContent,
  statistics: [
    {
      value: "320k+",
      label: "Active teams",
      description: "Planning launches, client work, operations, and internal projects.",
    },
    {
      value: "14M",
      label: "Tasks organized",
      description: "Tasks, notes, and decisions captured with clear ownership.",
    },
    {
      value: "42%",
      label: "Faster planning",
      description: "Less time chasing updates and more time moving work forward.",
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Reliable workspaces for teams that need consistent access.",
    },
  ] satisfies Statistic[],
  howItWorks: [
    {
      step: "01",
      title: "Capture the work",
      description:
        "Create projects, import notes, and turn open ideas into visible tasks with owners, due dates, and priority.",
    },
    {
      step: "02",
      title: "Align the team",
      description:
        "Share updates, connect files, and keep comments beside the exact work they explain so handoffs stay clear.",
    },
    {
      step: "03",
      title: "Deliver with confidence",
      description:
        "Use live status, progress views, and decision history to ship work without surprise blockers or scattered follow-ups.",
    },
  ] satisfies ProcessStep[],
  testimonials: [
    {
      quote:
        "Whitepace gave our distributed team a single operating rhythm. Planning meetings are shorter and project updates are finally easy to trust.",
      author: "Maya Chen",
      role: "Head of Operations, BrightLabs",
      avatar: "/avatars/avatar-1.png",
    },
    {
      quote:
        "The dashboard feels focused without being rigid. We can manage client launches, creative reviews, and weekly reporting from the same workspace.",
      author: "Omar Haddad",
      role: "Founder, Northstar Studio",
      avatar: "/avatars/avatar-2.png",
    },
    {
      quote:
        "Our engineering and marketing teams stopped duplicating status notes. Everyone sees the same source of truth before decisions are made.",
      author: "Sofia Rivera",
      role: "VP Product, Flowstate",
      avatar: "/avatars/avatar-3.png",
    },
  ] satisfies Testimonial[],
  resources: [
    {
      label: "Guide",
      title: "Build a cleaner project intake process",
      description:
        "A practical checklist for turning requests, notes, and priorities into work your team can actually execute.",
      href: "#resources",
    },
    {
      label: "Template",
      title: "Weekly team planning board",
      description:
        "A lightweight planning structure for sprint work, client delivery, and cross-functional initiatives.",
      href: "#resources",
    },
    {
      label: "Article",
      title: "How high-trust teams document decisions",
      description:
        "Simple documentation habits that reduce meeting load and make handoffs easier across time zones.",
      href: "#resources",
    },
  ] satisfies Resource[],
  cta: {
    title: "Start organizing your team with whitepace",
    description:
      "Create a shared workspace for projects, docs, goals, and decisions. Invite your team and get your first workflow running in minutes.",
    primaryCta: {
      label: "Try Whitepace free",
      href: "#pricing",
    },
    secondaryCta: {
      label: "See how it works",
      href: "#how-it-works",
    },
  } satisfies CtaContent,
  faqs: [
    {
      question: "Can Whitepace replace our current project tracker?",
      answer:
        "Yes. Teams can use Whitepace as the primary place for project planning, task ownership, notes, decisions, and launch visibility.",
    },
    {
      question: "Does it work for distributed teams?",
      answer:
        "Whitepace is designed for async collaboration with shared context, clear ownership, and status views that reduce meeting dependency.",
    },
    {
      question: "Can we connect our existing tools?",
      answer:
        "The integration model keeps files, messages, design work, and delivery updates close to the projects they support.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "The landing page flow points teams to a free trial CTA so they can test a workspace before committing to a rollout.",
    },
    {
      question: "Will dark mode be included?",
      answer:
        "Dark mode is planned as the final visual pass after the light theme sections, interactions, and performance polish are complete.",
    },
  ] satisfies Faq[],
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
