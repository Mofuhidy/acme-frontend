import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HighlightedHeading } from "@/components/ui/highlighted-heading";
import { CtaWaves } from "@/components/ui/cta-waves";

function Cta() {
  const { cta } = siteConfig;

  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-brand-navy py-20 text-white sm:py-28">
      <div className="absolute -left-36 top-1/2 -z-10 -translate-y-1/2 pointer-events-none select-none sm:-left-44 sm:w-auto md:-left-24 md:-top-64 md:bottom-12 md:translate-y-0">
        <CtaWaves className="h-auto w-lg max-w-none sm:w-xl md:h-[calc(100%+6rem)] md:w-auto" />
      </div>
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl leading-tight">
            <HighlightedHeading
              text={cta.title}
              highlightColor="text-[#A7CEFC]"
            />
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/76">
            {cta.description}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 rounded-lg bg-brand-blue px-7 text-base text-white shadow-xl shadow-brand-blue/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue/90">
              <a href={cta.primaryCta.href}>
                {cta.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Cta };
