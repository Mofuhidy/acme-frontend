import { ArrowRight, BookOpen, FileText, Layers } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const resourceIcons = [BookOpen, Layers, FileText];

function Resources() {
  return (
    <section id="resources" className="bg-white py-20 sm:py-28 dark:bg-slate-950">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Resources"
            title="Better workflows start with better habits"
            description="Use these practical resources to tighten planning, reduce handoff friction, and keep decision-making visible."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteConfig.resources.map((resource, index) => {
            const Icon = resourceIcons[index % resourceIcons.length];

            return (
              <Reveal key={resource.title} delay={index * 90}>
                <article className="group h-full rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-xl hover:shadow-brand-blue/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-none">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-blue-light text-brand-navy dark:bg-slate-800 dark:text-brand-blue">
                    <Icon className="size-6" />
                  </div>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-brand-navy dark:text-brand-yellow">
                    {resource.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-brand-ink dark:text-white">{resource.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{resource.description}</p>
                  <a
                    href={resource.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-navy outline-none transition hover:gap-3 hover:text-brand-blue focus-visible:ring-3 focus-visible:ring-brand-blue/35 dark:text-brand-blue dark:hover:text-brand-yellow"
                    aria-label={`Read more about ${resource.label.toLowerCase()}: ${resource.title}`}
                  >
                    Read more
                    <ArrowRight className="size-4" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { Resources };
