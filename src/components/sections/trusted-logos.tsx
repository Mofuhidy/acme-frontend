import Image from "next/image";
import { siteConfig } from "@/content/landing-page";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function TrustedLogos() {
  return (
    <section
      id="trusted-logos"
      aria-labelledby="trusted-logos-title"
      className="border-b bg-white py-12"
    >
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2
            id="trusted-logos-title"
            className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 lg:text-left lg:max-w-xs"
          >
            Trusted by productive teams
          </h2>
          <ul className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:min-w-[640px]">
            {siteConfig.trustedLogos.map((logo) => (
              <li key={logo.name} className="flex justify-center">
                <div className="relative h-10 w-28 filter grayscale opacity-45 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
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
