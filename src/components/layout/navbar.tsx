"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";

import { siteConfig } from "@/content/landing-page";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function BrandMark() {
  return (
    <Link
      href="#hero"
      className="group inline-flex items-center gap-2.5 rounded-lg text-white outline-none transition-opacity hover:opacity-90 focus-visible:ring-3 focus-visible:ring-white/40"
      aria-label="whitepace home"
    >
      <span className="relative grid size-8 place-items-center">
        <span className="absolute h-5 w-5 rotate-45 rounded-[5px] bg-white" />
        <span className="absolute h-4 w-4 -translate-x-1 -translate-y-1 rotate-45 rounded-[4px] bg-brand-blue" />
      </span>
      <span className="text-xl font-bold tracking-tight">{siteConfig.name}</span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
      {siteConfig.navItems.map((item) => (
        <div key={item.label} className="group relative">
          <a
            href={item.href}
            className={cn(
              "inline-flex h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-white/84 transition-colors",
              "hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/30"
            )}
          >
            {item.label}
            {item.children ? <ChevronDown className="size-4" /> : null}
          </a>
          {item.children ? (
            <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 pt-3 opacity-0 transition-[opacity,transform,visibility] duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-white p-3 text-brand-ink shadow-2xl shadow-slate-950/20">
                {item.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    className="block rounded-xl p-3 transition-colors hover:bg-brand-blue-light focus-visible:bg-brand-blue-light focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-blue/25"
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

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="text-white hover:bg-white/10 hover:text-white lg:hidden"
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
                  className="flex min-h-11 items-center justify-between rounded-xl px-3 text-base font-semibold text-brand-ink transition-colors hover:bg-background focus-visible:bg-background focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-blue/25"
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
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-navy/95 backdrop-blur supports-[backdrop-filter]:bg-brand-navy/88">
      <Container className="flex h-20 items-center justify-between gap-6">
        <BrandMark />
        <DesktopNav />
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="secondary"
            className="h-11 rounded-lg bg-brand-yellow px-5 text-brand-ink hover:bg-brand-yellow/90"
          >
            <a href="#login">Login</a>
          </Button>
          <Button
            asChild
            className="h-11 rounded-lg bg-brand-blue px-5 text-white hover:bg-brand-blue/90"
          >
            <a href="#cta">
              Try Whitepace free
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}

export { Navbar };
