import { ArrowRight, Globe, ChevronDown } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

import { Logo } from "@/components/ui/logo";

function Footer() {
  return (
    <footer id="footer" className="bg-brand-navy text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-md">
            <div className="flex items-center">
              <Logo variant="light" className="h-6.5 w-auto sm:h-7.5" />
            </div>
            <p className="mt-5 text-base leading-7 text-white/72">
              {siteConfig.description}
            </p>
            <Button
              asChild
              className="mt-7 h-12 rounded-lg bg-brand-blue px-6 text-white hover:bg-brand-blue/90"
            >
              <a href="#pricing">
                Try it today
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {siteConfig.footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">
                  <a
                    href={group.href}
                    className="text-white transition-colors hover:text-brand-yellow focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/30"
                  >
                    {group.title}
                  </a>
                </h2>
                <ul className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/72 transition-colors hover:text-brand-yellow focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/30"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="my-10 bg-white/12" />
        <div className="flex flex-col gap-8 text-sm text-white/62 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <button className="flex items-center gap-2 transition-colors hover:text-brand-yellow cursor-pointer">
              <Globe className="size-4" />
              <span>English</span>
              <ChevronDown className="size-3.5" />
            </button>
            <a className="transition-colors hover:text-brand-yellow" href="#footer">
              Terms & privacy
            </a>
            <a className="transition-colors hover:text-brand-yellow" href="#footer">
              Security
            </a>
            <a className="transition-colors hover:text-brand-yellow" href="#footer">
              Status
            </a>
            <span>©2021 Whitepace LLC.</span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-yellow"
              aria-label="Facebook"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-yellow"
              aria-label="Twitter"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand-yellow"
              aria-label="LinkedIn"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
