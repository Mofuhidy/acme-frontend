import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "left",
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-sm font-semibold uppercase tracking-[0.16em]",
            inverse ? "text-brand-yellow" : "text-brand-navy dark:text-brand-blue"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-4xl font-bold tracking-tight sm:text-5xl",
          inverse ? "text-white" : "text-brand-ink dark:text-white"
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 text-lg leading-8",
            inverse ? "text-white/78" : "text-muted-foreground dark:text-slate-400"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
