import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Cta } from "@/components/sections/cta";
import { Features, YourData } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Hero } from "@/components/sections/hero";
import { Integrations } from "@/components/sections/integrations";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedLogos } from "@/components/sections/trusted-logos";
import { Statistics } from "@/components/sections/statistics";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Resources } from "@/components/sections/resources";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-1 bg-background">
        <Hero />
        <TrustedLogos />
        <Features />
        <YourData />
        <HowItWorks />
        <Statistics />
        <Integrations />
        <Pricing />
        <Testimonials />
        <Resources />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
