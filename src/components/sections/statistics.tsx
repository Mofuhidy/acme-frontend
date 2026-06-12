import { siteConfig } from "@/content/landing-page";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function Statistics() {
  return (
    <section id="statistics" className="bg-brand-blue py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.statistics.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <div className="h-full rounded-[1.25rem] border border-white/18 bg-white/12 p-6 shadow-lg shadow-brand-navy/10 backdrop-blur">
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">{stat.value}</p>
                <h3 className="mt-4 text-lg font-semibold">{stat.label}</h3>
                <p className="mt-2 text-sm leading-6 text-white/76">{stat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { Statistics };
