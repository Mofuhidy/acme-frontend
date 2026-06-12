import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HighlightedHeading } from "@/components/ui/highlighted-heading";

function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl leading-tight">
            <HighlightedHeading text="See what our trusted users Say" />
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.testimonials.map((testimonial, index) => {
            // Card 1 is white, Cards 2 & 3 are brand-blue (#4F9CF9)
            const isBlue = index > 0;

            return (
              <Reveal key={`${testimonial.author}-${index}`} delay={index * 90}>
                <figure
                  className={`flex h-full flex-col rounded-[2rem] p-8 shadow-xl transition duration-300 hover:-translate-y-1 ${
                    isBlue
                      ? "bg-[#4F9CF9] text-white border border-[#4F9CF9] shadow-brand-blue/15"
                      : "bg-white text-brand-ink border border-slate-100 shadow-slate-100/50"
                  }`}
                >
                  <blockquote className={`flex-1 text-base leading-7 lg:text-lg lg:leading-8 ${isBlue ? "text-white" : "text-brand-ink"}`}>
                    {`"${testimonial.quote}"`}
                  </blockquote>

                  <figcaption className={`mt-8 border-t pt-6 flex items-center gap-4 ${isBlue ? "border-white/10" : "border-slate-100"}`}>
                    <div className="relative size-12 overflow-hidden rounded-full ring-2 ring-slate-100/20 shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        sizes="48px"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-0.5">
                      <p className="font-bold leading-tight">{testimonial.author}</p>
                      <p className={`text-sm ${isBlue ? "text-white/80" : "text-slate-500"}`}>{testimonial.role}</p>
                      <div className="flex gap-0.5 mt-1 shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-4 fill-[#FFE492] text-[#FFE492]" />
                        ))}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>

        {/* Mockup Prev/Next Arrow buttons at the bottom */}
        <Reveal delay={180} className="mt-12 flex justify-center gap-5">
          <button
            type="button"
            className="flex size-14 items-center justify-center rounded-full bg-[#E9F2FF] text-[#043873] hover:bg-brand-blue/20 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            className="flex size-14 items-center justify-center rounded-full bg-[#E9F2FF] text-[#043873] hover:bg-brand-blue/20 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="size-6" />
          </button>
        </Reveal>
      </Container>
    </section>
  );
}

export { Testimonials };
