import { siteConfig } from "@/content/landing-page";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28 dark:bg-slate-950">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From scattered work to shared momentum"
            description="Whitepace gives teams a repeatable path from intake to delivery, with enough structure to stay aligned and enough flexibility to keep work moving."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/35 to-transparent lg:block" />
          {siteConfig.howItWorks.map((step, index) => (
            <Reveal key={step.step} delay={index * 100}>
              <article className="relative h-full rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-none">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-blue text-xl font-bold text-white shadow-lg shadow-brand-blue/20">
                  {step.step}
                </div>
                <h3 className="mt-8 text-2xl font-bold text-brand-ink dark:text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { HowItWorks };
