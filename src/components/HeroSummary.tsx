import { AlertTriangle, BadgeCheck, Dna, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { variantSummary } from "@/data/variantReport";

export default function HeroSummary() {
  return (
    <section id="summary" className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/30 md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(20,184,166,0.30),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(245,158,11,0.22),transparent_24%)]" />
      <div className="absolute -right-10 top-10 h-64 w-64 rounded-full border border-white/10" />
      <div className="absolute right-20 top-24 h-32 w-32 rounded-full border border-teal-300/20" />

      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm text-teal-100">
            <Dna className="h-4 w-4" />
            FANCC 变异解读报告
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.36em] text-amber-200">Variant focus</p>
          <h1 className="font-serif text-5xl font-semibold leading-none tracking-tight md:text-7xl">
            {variantSummary.gene}
            <span className="block text-teal-200">{variantSummary.variant}</span>
          </h1>
          <p className="mt-5 text-xl text-slate-200">{variantSummary.protein}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{variantSummary.conclusion}</p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
          <div className="grid gap-3 sm:grid-cols-2">
            <Fact icon={<BadgeCheck className="h-5 w-5" />} label="ClinVar ID" value={variantSummary.clinvarId} />
            <Fact icon={<FileText className="h-5 w-5" />} label="rsID" value={variantSummary.rsId} />
            <Fact icon={<Dna className="h-5 w-5" />} label="Transcript" value={variantSummary.transcript} />
            <Fact icon={<AlertTriangle className="h-5 w-5" />} label="主要结论" value="LoF 致病机制" />
          </div>
          <div className="mt-5 rounded-2xl border border-amber-200/20 bg-amber-200/10 p-4 text-sm leading-6 text-amber-50">
            本页用于整理公开资料和文献，不构成诊断、治疗或筛查建议。请用完整检测报告、家族史和临床表现与遗传咨询师或医生确认。
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <div className="mb-3 text-teal-200">{icon}</div>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-1 font-mono text-sm text-white">{value}</p>
    </div>
  );
}
