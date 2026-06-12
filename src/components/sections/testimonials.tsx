import { Quote } from "lucide-react";
import Image from "next/image";

import { siteConfig } from "@/content/landing-page";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Teams trust it"
            title="Clearer planning for teams that move fast"
            description="Whitepace is built for teams that need project clarity without adding another complicated operating system."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteConfig.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 90}>
              <figure className="flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10">
                <Quote className="size-8 text-brand-blue" />
                <blockquote className="mt-6 flex-1 text-lg leading-8 text-brand-ink">
                  {`"${testimonial.quote}"`}
                </blockquote>
                <figcaption className="mt-8 border-t border-slate-200 pt-5 flex items-center gap-3">
                  <div className="relative size-11 overflow-hidden rounded-full ring-2 ring-slate-100 shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-brand-ink leading-tight">{testimonial.author}</p>
                    <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Testimonials };
