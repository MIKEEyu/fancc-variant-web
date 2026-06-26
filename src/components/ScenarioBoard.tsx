import { CheckCircle2, HelpCircle, Siren } from "lucide-react";
import { scenarios } from "@/data/variantReport";
import SectionHeading from "./SectionHeading";

const toneStyles = {
  best: {
    icon: CheckCircle2,
    className: "border-teal-200 bg-teal-50",
    badge: "bg-teal-600 text-white",
  },
  middle: {
    icon: HelpCircle,
    className: "border-amber-200 bg-amber-50",
    badge: "bg-amber-600 text-white",
  },
  worst: {
    icon: Siren,
    className: "border-rose-200 bg-rose-50",
    badge: "bg-rose-700 text-white",
  },
};

export default function ScenarioBoard() {
  return (
    <section id="scenarios" className="rounded-[2rem] bg-slate-950 p-6 text-white md:p-10">
      <SectionHeading eyebrow="Scenarios" title="最好与最差可能" inverted>
        这里把“变异致病性”和“个人患病概率”拆开看。最重要的问题是：报告里是否只有这一处 FANCC 致病变异，以及是否有相关临床表现。
      </SectionHeading>

      <div className="grid gap-5 lg:grid-cols-3">
        {scenarios.map((scenario) => {
          const style = toneStyles[scenario.tone];
          const Icon = style.icon;
          return (
            <article key={scenario.title} className={`rounded-3xl border p-6 text-slate-950 ${style.className}`}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <Icon className="h-7 w-7" />
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${style.badge}`}>{scenario.likelihoodLabel}</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold leading-tight">{scenario.title}</h3>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">解释</p>
              <p className="mt-2 leading-7 text-slate-700">{scenario.interpretation}</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">建议讨论</p>
              <p className="mt-2 leading-7 text-slate-700">{scenario.recommendedAction}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
