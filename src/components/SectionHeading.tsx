import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  inverted?: boolean;
}

export default function SectionHeading({ eyebrow, title, children, inverted = false }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-teal-600">{eyebrow}</p>
      <h2 className={`font-serif text-3xl font-semibold tracking-tight md:text-4xl ${inverted ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {children ? <p className={`mt-4 max-w-3xl text-base leading-7 ${inverted ? "text-slate-300" : "text-slate-600"}`}>{children}</p> : null}
    </div>
  );
}
