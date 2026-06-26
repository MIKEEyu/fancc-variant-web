import { ClipboardCheck, ExternalLink } from "lucide-react";
import { evidenceSources } from "@/data/variantReport";
import SectionHeading from "./SectionHeading";

export default function ReferenceList() {
  return (
    <section id="references" className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white md:p-10">
      <SectionHeading eyebrow="References" title="参考文献与行动清单" inverted>
        下列链接是页面内容依据。建议把完整基因检测报告、家族史和这些问题一起带给遗传咨询或相关专科门诊。
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-200 text-slate-950">
            <ClipboardCheck className="h-6 w-6" />
          </div>
          <h3 className="font-serif text-2xl font-semibold">建议带去咨询的问题</h3>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <li>报告是否只检出这一处 FANCC 致病变异？检测是否覆盖拷贝数变异和深内含子风险？</li>
            <li>本人是否有血细胞减少、发育异常、皮肤色素改变或其他 FA 提示性表现？</li>
            <li>家族中是否有早发乳腺癌、卵巢癌、血液肿瘤或头颈/消化道肿瘤聚集？</li>
            <li>伴侣或家系成员是否需要 FANCC 或更广泛 FA 通路基因检测？</li>
          </ul>
        </div>

        <div className="grid gap-3">
          {evidenceSources.map((source) => (
            <a key={source.id} className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-teal-300/50 hover:bg-white/[0.10]" href={source.url} target="_blank" rel="noreferrer">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">{source.organization}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{source.title}</p>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-teal-200" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 rounded-2xl border border-amber-200/20 bg-amber-200/10 p-4 text-sm leading-6 text-amber-50">
        访问日期：2026-06-26。数据库会更新，临床解释以最新检测报告、ClinVar 原始记录和专业人员判断为准。
      </p>
    </section>
  );
}
