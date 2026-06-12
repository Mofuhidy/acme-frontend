import { ArrowRight, PlayCircle } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function Cta() {
  const { cta } = siteConfig;

  return (
    <section id="pricing" className="bg-brand-navy py-20 text-white sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-yellow">
            Ready when your team is
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{cta.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/76">
            {cta.description}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 rounded-lg bg-brand-blue px-7 text-base text-white shadow-xl shadow-brand-blue/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue/90"
            >
              <a href={cta.primaryCta.href}>
                {cta.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-13 rounded-lg bg-brand-yellow px-7 text-base text-brand-ink transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-yellow/90"
            >
              <a href={cta.secondaryCta.href}>
                <PlayCircle className="size-4" />
                {cta.secondaryCta.label}
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Cta };
