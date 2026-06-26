import EvidenceMatrix from "@/components/EvidenceMatrix";
import HeroSummary from "@/components/HeroSummary";
import MechanismPanel from "@/components/MechanismPanel";
import MetricGrid from "@/components/MetricGrid";
import ReferenceList from "@/components/ReferenceList";
import ScenarioBoard from "@/components/ScenarioBoard";

const navItems = [
  { href: "#summary", label: "摘要" },
  { href: "#frequency", label: "频率" },
  { href: "#pathogenicity", label: "致病性" },
  { href: "#scenarios", label: "情景" },
  { href: "#evidence", label: "证据" },
  { href: "#references", label: "参考" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#e9f0ed_0%,#f7f2e9_46%,#dbe7e8_100%)] text-slate-950">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-5 md:px-6 lg:py-8">
        <aside className="sticky top-5 hidden h-[calc(100vh-2.5rem)] w-64 shrink-0 rounded-[1.75rem] border border-white/60 bg-white/70 p-5 shadow-xl shadow-slate-300/40 backdrop-blur lg:block">
          <p className="font-serif text-2xl font-semibold leading-tight">FANCC 变异分析</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">c.339G&gt;A · p.Trp113Ter</p>
          <nav className="mt-8 space-y-2" aria-label="页面导航">
            {navItems.map((item) => (
              <a key={item.href} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-950 hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-8 rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-slate-300">
            核心判断：该变异本身高度可疑致病；个人风险解释取决于是否存在第二个 FANCC 致病变异和临床背景。
          </div>
        </aside>

        <div className="min-w-0 flex-1 space-y-6">
          <nav className="sticky top-0 z-20 -mx-4 flex gap-2 overflow-x-auto border-b border-white/60 bg-white/80 px-4 py-3 backdrop-blur lg:hidden" aria-label="移动端页面导航">
            {navItems.map((item) => (
              <a key={item.href} className="whitespace-nowrap rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <HeroSummary />
          <MetricGrid />
          <MechanismPanel />
          <ScenarioBoard />
          <EvidenceMatrix />
          <ReferenceList />
        </div>
      </div>
    </main>
  );
}
