import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/content/landing-page";

function Faq() {
  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before your first workspace"
            description="The essentials for teams comparing Whitepace with their current project and documentation setup."
          />
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="gap-3">
            {siteConfig.faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-[1rem] border border-slate-200 bg-white px-5 shadow-sm"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-brand-ink hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-7 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}

export { Faq };
