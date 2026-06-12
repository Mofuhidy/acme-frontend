import Image from "next/image";
import { siteConfig } from "@/content/landing-page";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HighlightedHeading } from "@/components/ui/highlighted-heading";

function TrustedLogos() {
  return (
    <section
      id="trusted-logos"
      aria-labelledby="trusted-logos-title"
      className="bg-white py-20 sm:py-28"
    >
      <Container className="flex flex-col items-center gap-16">
        <Reveal>
          <h2
            id="trusted-logos-title"
            className="text-4xl font-bold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl text-center leading-tight"
          >
            <HighlightedHeading text="Our sponsors" />
          </h2>
        </Reveal>

        <Reveal delay={90} className="w-full">
          <ul className="grid grid-cols-2 items-center justify-items-center gap-12 sm:grid-cols-4 w-full max-w-5xl mx-auto">
            {siteConfig.trustedLogos.map((logo) => (
              <li key={logo.name} className="flex justify-center w-full">
                <div className="relative h-14 w-full max-w-[160px] transition-transform duration-300 hover:scale-105">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export { TrustedLogos };
