import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function Integrations() {
  const { integrations } = siteConfig;

  return (
    <section id="integrations" className="overflow-hidden bg-brand-navy py-20 text-white sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <SectionHeading
            eyebrow={integrations.eyebrow}
            title={integrations.title}
            description={integrations.description}
            inverse
          />
          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-lg bg-brand-blue px-6 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue/90"
          >
            <a href={integrations.cta.href}>
              {integrations.cta.label}
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </Reveal>

        <Reveal delay={120} className="relative min-h-[420px]">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
          <div className="absolute inset-10 rounded-full border border-dashed border-brand-blue/35" />
          <div className="relative mx-auto flex min-h-[420px] max-w-[760px] items-center justify-center">
            <Image
              src={integrations.image.src}
              alt={integrations.image.alt}
              width={integrations.image.width}
              height={integrations.image.height}
              className="h-auto w-full drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Integrations };
