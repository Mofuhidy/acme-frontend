import {
  ArrowRight,
  Blocks,
  Check,
  Cloud,
  Code2,
  FileText,
  MessageSquare,
  PenTool,
  Video,
  Zap,
} from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const integrationIcons = [
  MessageSquare,
  Cloud,
  PenTool,
  Code2,
  Zap,
  FileText,
  Video,
  Blocks,
];

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
          <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14 bg-white/10 shadow-2xl shadow-slate-950/20 backdrop-blur" />
          <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.5rem] bg-brand-yellow text-brand-ink shadow-xl">
            <Check className="size-9" />
          </div>
          <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
          <div className="absolute inset-10 rounded-full border border-dashed border-brand-blue/35" />
          <div className="relative grid min-h-[420px] grid-cols-2 gap-4 sm:grid-cols-4">
            {integrations.apps.map((app, index) => {
              const Icon = integrationIcons[index % integrationIcons.length];

              return (
                <div
                  key={app.name}
                  className="flex min-h-32 flex-col justify-between rounded-[1.25rem] border border-white/12 bg-white/10 p-4 shadow-lg shadow-slate-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <Icon className="size-6 text-brand-yellow" />
                  <div>
                    <p className="font-semibold text-white">{app.name}</p>
                    <p className="mt-1 text-sm text-white/62">{app.category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { Integrations };
