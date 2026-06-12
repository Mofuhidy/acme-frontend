import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Whitepace - SaaS Landing Page",
  description:
    "A production-quality SaaS landing page built with Next.js, Tailwind CSS, and shadcn/ui.",
  metadataBase: new URL("https://white-frontend-3232xdvre-mofuhidys-projects.vercel.app"),
  openGraph: {
    title: "Whitepace - SaaS Landing Page",
    description:
      "A production-quality SaaS landing page built with Next.js, Tailwind CSS, and shadcn/ui.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Whitepace",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whitepace - SaaS Landing Page",
    description:
      "A production-quality SaaS landing page built with Next.js, Tailwind CSS, and shadcn/ui.",
  },
};

import { ThemeProvider } from "@/components/ui/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased theme-transition"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-60 -translate-y-16 rounded-lg bg-brand-yellow px-4 py-2 font-semibold text-brand-ink shadow-lg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
