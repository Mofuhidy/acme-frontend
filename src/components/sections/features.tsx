import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { siteConfig, Feature } from "@/content/landing-page";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HighlightedHeading } from "@/components/ui/highlighted-heading";

import { ConcentricWaves } from "@/components/ui/concentric-waves";

const featureCtaLabels: Record<string, string> = {
  "project-management": "Get Started",
  "work-together": "Try it now",
  "extension": "Let's Go",
  "your-data": "Read more",
};

interface FeatureRowProps {
  feature: Feature;
}

function FeatureRow({ feature }: FeatureRowProps) {
  const isReverse = feature.id === "work-together";
  const ctaLabel = featureCtaLabels[feature.id] || "Learn more";
  
  // Determine if we should render a light blue placeholder box or an image
  const isPlaceholder = feature.id === "project-management";

  return (
    <div
      id={feature.id}
      className="relative isolate grid gap-12 py-16 items-center md:grid-cols-2 sm:py-24"
    >
      {feature.id === "project-management" && (
        <div className="absolute -left-16 -bottom-8 -z-10 pointer-events-none opacity-40 select-none sm:-left-24 md:left-[-140px] md:-bottom-[40px]">
          <ConcentricWaves className="w-[420px] h-auto sm:w-[500px] md:w-[560px]" />
        </div>
      )}
      <Reveal
        className={isReverse ? "order-1 md:order-2" : "order-1 md:order-1"}
      >
        <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl leading-tight text-center md:text-left">
            <HighlightedHeading text={feature.title} />
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 text-center md:text-left">
            {feature.description}
          </p>
          <div className="mt-8 flex justify-center md:justify-start w-full">
            <Button
              asChild
              className="h-12 w-full sm:w-auto rounded-lg bg-brand-blue px-6 text-white hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/10 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <a href={feature.href}>
                {ctaLabel}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal
        delay={90}
        className={isReverse ? "order-2 md:order-1" : "order-2 md:order-2"}
      >
        {isPlaceholder ? (
          <div className="relative rounded-[1.75rem] border border-slate-200 bg-[#C4DEFD] aspect-[4/3] w-full shadow-lg shadow-slate-200/50 transition duration-300 hover:scale-[1.02] hover:-translate-y-1" />
        ) : (
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-2 flex justify-center transition duration-300 hover:scale-[1.02] hover:-translate-y-1">
            <Image
              src={feature.image.src}
              alt={feature.image.alt}
              width={feature.image.width}
              height={feature.image.height}
              className="h-auto w-full max-w-[550px] object-contain md:max-w-none"
              sizes="(max-width: 768px) 100vw, 550px"
              loading="lazy"
            />
          </div>
        )}
      </Reveal>
    </div>
  );
}

function Features() {
  const primaryFeatures = siteConfig.features.filter(
    (feature) => feature.id !== "your-data" && feature.id !== "extension"
  );

  return (
    <section id="features" className="bg-white py-12 sm:py-16">
      <Container className="divide-y divide-slate-100">
        {primaryFeatures.map((feature) => (
          <FeatureRow key={feature.id} feature={feature} />
        ))}
      </Container>
    </section>
  );
}

function YourData() {
  const securityFeature = siteConfig.features.find(
    (feature) => feature.id === "your-data"
  );

  if (!securityFeature) return null;

  return (
    <section id="your-data" className="bg-white py-12 sm:py-16">
      <Container>
        <FeatureRow feature={securityFeature} />
      </Container>
    </section>
  );
}

export { Features, YourData };
