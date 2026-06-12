import { siteConfig } from "@/content/landing-page";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function TrustedLogos() {
  return (
    <section
      id="trusted-logos"
      aria-labelledby="trusted-logos-title"
      className="border-b bg-white py-10"
    >
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2
            id="trusted-logos-title"
            className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 lg:text-left"
          >
            Trusted by productive teams
          </h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:min-w-[720px]">
            {siteConfig.trustedLogos.map((logo) => (
              <li key={logo.name}>
                <div className="grid h-16 place-items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-brand-navy transition duration-200 hover:-translate-y-0.5 hover:border-brand-blue/40 hover:bg-brand-blue-light">
                  <span aria-label={logo.name}>{logo.shortName}</span>
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
