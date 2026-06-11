import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <p className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">
          Whitepace SaaS Landing Page
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Project scaffold is ready for feature branches.
        </h1>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          Next.js, TypeScript, Tailwind CSS, and shadcn/ui are configured. The
          Figma-matched landing sections will be implemented through the planned
          feature PR flow.
        </p>
        <Button asChild size="lg">
          <a href="#next-step">Ready for the first feature PR</a>
        </Button>
      </div>
    </main>
  );
}
