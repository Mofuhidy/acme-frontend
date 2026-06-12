import { Check } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HighlightedHeading } from "@/components/ui/highlighted-heading";

function Pricing() {
  const { pricing } = siteConfig;

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl leading-tight">
            <HighlightedHeading text="Choose Your Plan" />
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-center">
          {pricing.map((plan, index) => {
            const isPersonal = plan.isPopular;

            return (
              <Reveal key={plan.name} delay={index * 90}>
                <div
                  className={`flex flex-col rounded-[2rem] border px-8 py-10 transition duration-300 hover:-translate-y-1 ${
                    isPersonal
                      ? "border-brand-blue bg-[#043873] text-white shadow-2xl shadow-brand-navy/35 scale-105"
                      : "border-slate-200 bg-white text-brand-ink shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                  }`}
                >
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span
                      className={`text-4xl font-bold tracking-tight sm:text-5xl ${
                        isPersonal ? "text-brand-yellow" : "text-brand-ink"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`mt-4 text-sm font-semibold leading-6 ${
                      isPersonal ? "text-white/80" : "text-slate-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-8">
                    <Button
                      asChild
                      variant={isPersonal ? "default" : "outline"}
                      className={`h-12 w-full rounded-xl px-6 font-semibold shadow-sm transition duration-200 ${
                        isPersonal
                          ? "bg-brand-blue text-white hover:bg-brand-blue/90"
                          : "border-slate-300 text-brand-ink hover:bg-slate-50"
                      }`}
                    >
                      <a href="#hero">{plan.buttonLabel}</a>
                    </Button>
                  </div>

                  <ul
                    className={`mt-8 space-y-4 text-sm leading-6 ${
                      isPersonal ? "text-white/84" : "text-slate-600"
                    }`}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check
                          className={`size-5 shrink-0 ${
                            isPersonal ? "text-brand-yellow" : "text-brand-blue"
                          }`}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { Pricing };
