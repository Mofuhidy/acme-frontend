import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Cta } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { Resources } from "@/components/sections/resources";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedLogos } from "@/components/sections/trusted-logos";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-1 bg-background">
        <Hero />
        <TrustedLogos />
        <Features />
        <Pricing />
        <Integrations />
        <Statistics />
        <HowItWorks />
        <Testimonials />
        <Resources />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
