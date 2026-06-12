import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HighlightedHeading } from "@/components/ui/highlighted-heading";

function Integrations() {
  const { integrations } = siteConfig;

  return (
    <section id="integrations" className="relative isolate overflow-hidden bg-[#043873] py-20 text-white sm:py-28">
      {/* Decorative wave lines on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none w-full opacity-50">
        <Image
          src="/Element.svg"
          alt=""
          aria-hidden="true"
          width={1920}
          height={701}
          className="w-full h-auto"
        />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Graphic Column (Left on desktop, bottom on mobile) */}
        <Reveal delay={120} className="order-2 lg:order-1 relative mx-auto flex w-full max-w-[550px] items-center justify-center lg:max-w-none">
          <div className="relative overflow-hidden rounded-[1.75rem] p-2 w-full flex justify-center">
            <Image
              src={integrations.image.src}
              alt={integrations.image.alt}
              width={integrations.image.width}
              height={integrations.image.height}
              className="h-auto w-full object-contain max-w-[500px] lg:max-w-none animate-float"
              sizes="(max-width: 1024px) 100vw, 550px"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Text Column (Right on desktop, top on mobile) */}
        <Reveal className="order-1 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 max-w-2xl">
          {integrations.eyebrow ? (
            <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/10">
              {integrations.eyebrow}
            </p>
          ) : null}
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6.5xl leading-tight text-white">
            <HighlightedHeading text={integrations.title} />
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
            {integrations.description}
          </p>
          <div className="mt-8 flex justify-center lg:justify-start w-full">
            <Button
              asChild
              size="lg"
              className="h-12 w-full sm:w-auto rounded-lg bg-brand-blue px-6 text-white hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/10 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <a
                href={integrations.cta.href}
                aria-label="Read more about Whitepace app integrations"
              >
                {integrations.cta.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Integrations };
