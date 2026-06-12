import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { TrustedLogos } from "@/components/sections/trusted-logos";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-background">
        <Hero />
        <TrustedLogos />
        <Features />
      </main>
      <Footer />
    </>
  );
}
