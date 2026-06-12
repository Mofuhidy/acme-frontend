import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ConcentricWaves } from "@/components/ui/concentric-waves";

function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-white text-brand-ink">
      <div className="absolute inset-0 -z-10 opacity-45 [background-image:radial-gradient(circle_at_18%_20%,rgba(255,228,146,0.2),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(255,228,146,0.15),transparent_28%)]" />
      <div className="absolute -left-16 -bottom-8 -z-10 pointer-events-none opacity-40 select-none sm:-left-24 md:left-[-140px] md:-bottom-[40px]">
        <ConcentricWaves className="w-[420px] h-auto sm:w-[500px] md:w-[560px]" />
      </div>
      <Container className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left lg:mx-0">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-brand-blue sm:text-6xl lg:text-7.5xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-blue">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="h-13 w-full sm:w-auto rounded-lg bg-brand-blue px-8 text-base text-white shadow-xl shadow-brand-blue/15 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue/90">
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-[550px] mx-auto lg:max-w-none">
          <div className="absolute -inset-5 rounded-[2rem] bg-brand-blue/5 blur-3xl" />
          <div className="relative rounded-[1.75rem] border border-slate-200 bg-[#C4DEFD] aspect-[4/3] w-full shadow-lg shadow-slate-200/50" />
        </div>
      </Container>
    </section>
  );
}

export { Hero };
