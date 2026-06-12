"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useActiveSection } from "@/components/layout/use-active-section";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Logo } from "@/components/ui/logo";

function BrandMark() {
  return (
    <Link
      href="#hero"
      className="group inline-flex items-center rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-3 focus-visible:ring-brand-blue/30"
      aria-label="whitepace home"
    >
      <Logo variant="blue" className="h-6.5 w-auto sm:h-7.5" />
    </Link>
  );
}

function DesktopNav({ activeSection }: { activeSection: string }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {siteConfig.navItems.map((item) => (
        <div key={item.label} className="group relative">
          <a
            href={item.href}
            aria-current={
              item.href === `#${activeSection}` ? "page" : undefined
            }
            className={cn(
              "inline-flex h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-brand-ink/80 transition-colors",
              "hover:bg-slate-100 hover:text-brand-ink focus-visible:bg-slate-100 focus-visible:text-brand-ink focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-blue/20",
              item.href === `#${activeSection}` &&
                "bg-slate-100 text-brand-ink font-semibold"
            )}
          >
            {item.label}
            {item.children ? <ChevronDown className="size-4 opacity-70" /> : null}
          </a>
          {item.children ? (
            <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 pt-3 opacity-0 transition-[opacity,transform,visibility] duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 text-brand-ink shadow-2xl shadow-slate-950/10">
                {item.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    className="block rounded-xl p-3 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-blue/25"
                  >
                    <span className="block text-sm font-semibold">
                      {child.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      {child.description}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </nav>
  );
}

function MobileNav({ activeSection }: { activeSection: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="text-brand-navy hover:bg-slate-100 hover:text-brand-blue lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[86vw] border-white/10 p-0">
        <SheetHeader className="border-b p-5 text-left">
          <SheetTitle>{siteConfig.name}</SheetTitle>
          <SheetDescription>{siteConfig.description}</SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile primary" className="grid gap-2 p-5">
          {siteConfig.navItems.map((item) => (
            <div key={item.label} className="rounded-2xl bg-muted/60 p-2">
              <SheetClose asChild>
                <a
                  href={item.href}
                  aria-current={
                    item.href === `#${activeSection}` ? "page" : undefined
                  }
                  className={cn(
                    "flex min-h-11 items-center justify-between rounded-xl px-3 text-base font-semibold text-brand-ink transition-colors hover:bg-background focus-visible:bg-background focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-blue/25",
                    item.href === `#${activeSection}` && "bg-background"
                  )}
                >
                  {item.label}
                  <ArrowRight className="size-4" />
                </a>
              </SheetClose>
              {item.children ? (
                <div className="mt-1 grid gap-1">
                  {item.children.map((child) => (
                    <SheetClose asChild key={child.label}>
                      <a
                        href={child.href}
                        className="rounded-xl px-3 py-2 text-sm leading-6 text-muted-foreground transition-colors hover:bg-background hover:text-foreground focus-visible:bg-background focus-visible:text-foreground focus-visible:outline-none"
                      >
                        {child.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function Navbar() {
  const activeSection = useActiveSection();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/88">
      <Container className="flex h-20 items-center justify-between gap-6">
        <BrandMark />
        <DesktopNav activeSection={activeSection} />
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="secondary"
            className="h-11 rounded-lg bg-brand-yellow px-5 text-brand-ink hover:bg-brand-yellow/90"
          >
            <a href="#pricing">Login</a>
          </Button>
          <Button
            asChild
            className="h-11 rounded-lg bg-brand-blue px-5 text-white hover:bg-brand-blue/90"
          >
            <a href="#pricing">
              Try Whitepace free
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <MobileNav activeSection={activeSection} />
      </Container>
    </header>
  );
}

export { Navbar };
