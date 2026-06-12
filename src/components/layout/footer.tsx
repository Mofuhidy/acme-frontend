import { ArrowRight } from "lucide-react";

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
        <div className="flex flex-col gap-4 text-sm text-white/62 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 whitepace. All rights reserved.</p>
          <div className="flex gap-5">
            <a className="transition-colors hover:text-white" href="#footer">
              Terms
            </a>
            <a className="transition-colors hover:text-white" href="#footer">
              Security
            </a>
            <a className="transition-colors hover:text-white" href="#footer">
              Status
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
