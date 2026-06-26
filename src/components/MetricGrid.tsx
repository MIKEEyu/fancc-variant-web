import { Activity, Database, Microscope, Users } from "lucide-react";
import { keyMetrics } from "@/data/variantReport";
import SectionHeading from "./SectionHeading";

const icons = [Activity, Database, Microscope, Users];

export default function MetricGrid() {
  return (
    <section id="frequency" className="rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/70 md:p-10">
      <SectionHeading eyebrow="Distribution" title="分布概率与检出率">
        这个位点在人群数据库中很罕见。文献里的 0.4% 来自特定的 BRCA1/2 阴性中国家族性乳腺/卵巢癌队列，不能直接外推到一般人群。
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {keyMetrics.map((metric, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article key={metric.label} className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/70">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-teal-200">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-slate-500">{metric.label}</p>
              <p className="mt-3 font-serif text-3xl font-semibold text-slate-950">{metric.value}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{metric.note}</p>
              <a className="mt-5 inline-flex text-sm font-semibold text-teal-700 hover:text-teal-900" href={`#${metric.sourceId}`}>
                查看来源
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
