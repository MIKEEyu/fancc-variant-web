import { ExternalLink, LibraryBig } from "lucide-react";
import { evidenceSources, timeline } from "@/data/variantReport";
import SectionHeading from "./SectionHeading";

const levelClass = {
  高: "bg-teal-100 text-teal-800",
  中: "bg-amber-100 text-amber-800",
  有限: "bg-slate-200 text-slate-700",
};

export default function EvidenceMatrix() {
  return (
    <section id="evidence" className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/70 md:p-10">
      <SectionHeading eyebrow="Evidence" title="证据矩阵">
        每条来源都标明用途和局限。遗传变异解释最怕只看单个结论，最好同时看分类一致性、机制、频率、队列研究和临床表型。
      </SectionHeading>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {evidenceSources.map((source) => (
            <article id={source.id} key={source.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">{source.organization}</p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-slate-950">{source.title}</h3>
                </div>
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${levelClass[source.evidenceLevel]}`}>证据强度：{source.evidenceLevel}</span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Info label="用于判断" text={source.usedFor} />
                <Info label="局限" text={source.limitation} />
              </div>
              <a className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-950" href={source.url} target="_blank" rel="noreferrer">
                打开来源 <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-[#f7f2e9] p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-teal-200">
              <LibraryBig className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-slate-950">证据时间线</h3>
          </div>
          <div className="space-y-5">
            {timeline.map((item) => (
              <div key={item.title} className="border-l-2 border-teal-500 pl-5">
                <p className="font-mono text-sm font-bold text-teal-700">{item.year}</p>
                <h4 className="mt-1 font-semibold text-slate-950">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function Info({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}
