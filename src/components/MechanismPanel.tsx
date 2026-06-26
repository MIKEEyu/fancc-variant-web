import { ArrowRight, FlaskConical, ShieldAlert } from "lucide-react";
import { mechanismBullets } from "@/data/variantReport";
import SectionHeading from "./SectionHeading";

export default function MechanismPanel() {
  return (
    <section id="pathogenicity" className="rounded-[2rem] border border-slate-200 bg-[#f7f2e9] p-6 md:p-10">
      <SectionHeading eyebrow="Pathogenicity" title="为什么这个变异倾向致病">
        关键不是单个碱基改变本身，而是它造成早停密码子，落在 FANCC 已知功能缺失致病机制内。
      </SectionHeading>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-slate-950 p-6 text-white">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-300/15 text-teal-200">
              <FlaskConical className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-slate-400">分子后果</p>
              <p className="font-serif text-2xl font-semibold">Stop-gained</p>
            </div>
          </div>
          <div className="space-y-3">
            <FlowStep label="c.339G>A" />
            <ArrowRight className="ml-5 h-5 w-5 rotate-90 text-amber-200" />
            <FlowStep label="Trp113 变为终止密码子" />
            <ArrowRight className="ml-5 h-5 w-5 rotate-90 text-amber-200" />
            <FlowStep label="mRNA 降解或截短蛋白" />
            <ArrowRight className="ml-5 h-5 w-5 rotate-90 text-amber-200" />
            <FlowStep label="FANCC 功能缺失" />
          </div>
        </div>

        <div className="grid gap-4">
          {mechanismBullets.map((item, index) => (
            <div key={item} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800">
                {index + 1}
              </div>
              <p className="leading-7 text-slate-700">{item}</p>
            </div>
          ))}
          <div className="flex gap-4 rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
            <p className="leading-7 text-amber-950">
              致病性强不等于个人一定患病。FANCC 相关 Fanconi anemia 通常需要双等位致病变异，单等位结果需要结合第二变异搜索、表型和家系检测解释。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowStep({ label }: { label: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-mono text-sm text-slate-100">{label}</div>;
}
