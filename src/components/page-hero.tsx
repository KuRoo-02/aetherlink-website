import Image from "next/image";
import { type ReactNode } from "react";
import { Eyebrow } from "./section";

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border/60">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
      {imageSrc && (
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/35" />
      )}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">{description}</p>
        )}
        {children}
      </div>
    </header>
  );
}
