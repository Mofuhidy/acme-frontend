import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What you can build"
            title="A cleaner way to manage modern team work"
            description="Whitepace follows the core rhythm of the Figma design: focused project planning, collaborative workspaces, and extensible workflows."
          />
        </Reveal>

        <div className="mt-16 grid gap-8">
          {siteConfig.features.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 90}>
              <Card
                id={feature.id}
                className="grid gap-8 rounded-[1.75rem] border-0 bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/10 md:grid-cols-2 md:p-6 lg:p-8"
              >
                <div className="order-2 flex flex-col justify-center p-2 md:order-1 lg:p-6">
                  <CardHeader className="px-0">
                    <p className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue-light px-3 py-1 text-sm font-semibold text-brand-blue">
                      <CheckCircle2 className="size-4" />
                      {feature.eyebrow}
                    </p>
                    <CardTitle className="text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-slate-600">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pt-3">
                    <Button
                      asChild
                      className="h-12 rounded-lg bg-brand-blue px-6 text-white hover:bg-brand-blue/90"
                    >
                      <a href={feature.href}>
                        Learn more
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </CardContent>
                </div>
                <div className="order-1 overflow-hidden rounded-[1.35rem] bg-white p-4 ring-1 ring-slate-200 md:order-2">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={feature.image.width}
                    height={feature.image.height}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Features };
