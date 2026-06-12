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
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
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

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  buttonLabel: string;
  isPopular?: boolean;
  features: string[];
};

export const siteConfig = {
  name: "whitepace",
  description:
    "Project management and team collaboration software for productive work.",
  hero: {
    badge: "Get More Done with whitepace",
    title: "Get More Done with whitepace",
    description:
      "Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
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
    {
      name: "Microsoft",
      shortName: "Microsoft",
      src: "/sponsors/Microsoft.png",
    },
    { name: "Slack", shortName: "Slack", src: "/sponsors/Slack.png" },
    { name: "Google", shortName: "Google", src: "/sponsors/Google.png" },
  ] satisfies TrustedLogo[],
  features: [
    {
      id: "project-management",
      eyebrow: "Project management",
      title: "Project Management",
      description:
        "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
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
      title: "Work together",
      description:
        "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
      href: "#work-together",
      image: {
        src: "/work-together.png",
        alt: "Team collaboration illustration with connected teammates and shared notes",
        width: 710,
        height: 661,
      },
    },
    {
      id: "extension",
      eyebrow: "Customise",
      title: "Customise it to your needs",
      description:
        "Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
      href: "#integrations",
      image: {
        src: "/favorite-apps.png",
        alt: "Whitepace favorite apps integration orbit",
        width: 759,
        height: 400,
      },
    },
    {
      id: "your-data",
      eyebrow: "100% your data",
      title: "100% your data",
      description:
        "The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.",
      href: "#features",
      image: {
        src: "/element.png",
        alt: "100% your data security graphic",
        width: 759,
        height: 400,
      },
    },
  ] satisfies Feature[],
  pricing: [
    {
      name: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      buttonLabel: "Get Started",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      name: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      buttonLabel: "Get Started",
      isPopular: true,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      name: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      buttonLabel: "Get Started",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
  ] satisfies PricingPlan[],
  integrations: {
    eyebrow: "",
    title: "Work with Your Favorite Apps Using whitepace",
    description:
      "Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.",
    image: {
      src: "/favorite-apps.png",
      alt: "Whitepace connected apps orbit illustration",
      width: 759,
      height: 400,
    },
    cta: {
      label: "Read more",
      href: "#pricing",
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
      description:
        "Planning launches, client work, operations, and internal projects.",
    },
    {
      value: "14M",
      label: "Tasks organized",
      description: "Tasks, notes, and decisions captured with clear ownership.",
    },
    {
      value: "42%",
      label: "Faster planning",
      description:
        "Less time chasing updates and more time moving work forward.",
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
        "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      author: "Jessie Owner",
      role: "Founder, XYZ Company",
      avatar: "/testimonials/avatar-1.png",
    },
    {
      quote:
        "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      author: "Jessie Owner",
      role: "Founder, XYZ Company",
      avatar: "/testimonials/avatar-2.png",
    },
    {
      quote:
        "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
      author: "Jessie Owner",
      role: "Founder, XYZ Company",
      avatar: "/testimonials/avatar-3.png",
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
    title: "Your work, everywhere you are",
    description:
      "Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!",
    primaryCta: {
      label: "Try Taskey",
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
