import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-background">
        <section className="border-b bg-brand-navy py-24 text-white sm:py-32">
          <Container className="text-center">
            <SectionHeading
              as="h1"
              align="center"
              eyebrow="Whitepace SaaS Landing Page"
              title="Design-system shell is ready."
              description="The shared layout, navigation, footer, brand tokens, and reusable UI wrappers are in place for the Figma-matched feature sections."
              inverse
            />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-lg bg-brand-blue px-7 text-base text-white hover:bg-brand-blue/90"
              >
                <a href="#next-step">Start feature sections</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-12 rounded-lg bg-brand-yellow px-7 text-base text-brand-ink hover:bg-brand-yellow/90"
              >
                <a href="#footer">Review structure</a>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
