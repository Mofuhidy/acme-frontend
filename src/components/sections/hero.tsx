import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

import { YellowDash } from "@/components/ui/yellow-dash";

function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-brand-navy text-white"
    >
      <div className="absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle_at_18%_20%,rgba(79,156,249,0.55),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(255,228,146,0.25),transparent_28%)]" />
      <Container className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brand-yellow ring-1 ring-white/15">
            {hero.badge}
          </p>
          <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {hero.title.split(/(Management)/i).map((part, index) =>
              part.toLowerCase() === "management" ? (
                <span key={index} className="relative inline-block whitespace-nowrap">
                  {part}
                  <YellowDash className="absolute -bottom-2.5 left-0 w-full h-auto text-brand-yellow" />
                </span>
              ) : (
                part
              )
            )}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/76">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 rounded-lg bg-brand-blue px-7 text-base text-white shadow-xl shadow-brand-blue/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue/90"
            >
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-13 rounded-lg bg-brand-yellow px-7 text-base text-brand-ink transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-yellow/90"
            >
              <a href={hero.secondaryCta.href}>
                <PlayCircle className="size-4" />
                {hero.secondaryCta.label}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-brand-blue/20 blur-3xl" />
          <div className="relative rounded-[1.75rem] border border-white/14 bg-white/10 p-3 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              priority
              className="h-auto w-full rounded-[1.25rem]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Hero };
