"use client";

import React, { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HighlightedHeading } from "@/components/ui/highlighted-heading";

function Pricing() {
  const { pricing } = siteConfig;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle card (Personal)

  // Update active dot on scroll
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    if (clientWidth === 0) return;

    // Calculate which card is currently centered
    const index = Math.round(scrollLeft / clientWidth);
    if (index >= 0 && index < pricing.length) {
      setActiveIndex(index);
    }
  };

  // Scroll to card index
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.querySelector("[data-card-index]") as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 32; // gap-8 is 2rem = 32px
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  // Set initial scroll to Personal (middle card) on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(1);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28 overflow-hidden">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl leading-tight">
            <HighlightedHeading text="Choose Your Plan" />
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
          </p>
        </Reveal>

        {/* Carousel container: Scrollable on mobile/tablet, grid on desktop */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="mt-16 flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory lg:overflow-x-visible pb-8 lg:pb-0 scrollbar-none scroll-smooth px-4 -mx-4 lg:px-0 lg:mx-0"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {pricing.map((plan, index) => {
            const isPersonal = plan.isPopular;

            return (
              <div
                key={plan.name}
                data-card-index={index}
                className="w-[85vw] sm:w-[380px] lg:w-auto shrink-0 snap-center flex flex-col"
              >
                <div
                  className={`flex flex-col h-full rounded-[2rem] border px-8 py-10 transition duration-300 hover:-translate-y-1 ${
                    isPersonal
                      ? "border-slate-100 bg-white text-[#043873] shadow-[0_20px_50px_rgba(0,0,0,0.08)] lg:scale-105"
                      : "border-2 border-brand-yellow bg-white text-brand-ink shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                  }`}
                >
                  <h3 className={`text-xl font-bold ${isPersonal ? "text-[#043873]" : "text-brand-ink"}`}>{plan.name}</h3>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span
                      className={`text-4xl font-bold tracking-tight sm:text-5xl ${
                        isPersonal ? "text-[#043873]" : "text-brand-ink"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`mt-4 text-sm font-semibold leading-6 ${
                      isPersonal ? "text-[#043873]/80" : "text-slate-500"
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
                      isPersonal ? "text-[#043873]/90" : "text-slate-600"
                    }`}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check
                          className={`size-5 shrink-0 ${
                            isPersonal ? "text-brand-blue" : "text-brand-ink"
                          }`}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators: Only visible on mobile/tablet */}
        <div className="mt-8 flex justify-center gap-3 lg:hidden">
          {pricing.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`size-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-[#043873] scale-125"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to plan ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Pricing };
