export type EvidenceLevel = "高" | "中" | "有限";

export interface Metric {
  label: string;
  value: string;
  note: string;
  sourceId: string;
}

export interface Scenario {
  title: string;
  likelihoodLabel: string;
  interpretation: string;
  recommendedAction: string;
  tone: "best" | "middle" | "worst";
}

export interface EvidenceSource {
  id: string;
  title: string;
  organization: string;
  url: string;
  evidenceLevel: EvidenceLevel;
  usedFor: string;
  limitation: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  detail: string;
}

export const variantSummary = {
  gene: "FANCC",
  variant: "c.339G>A",
  protein: "p.Trp113Ter / p.W113*",
  transcript: "NM_000136.3",
  rsId: "rs1057516291",
  clinvarId: "370175",
  conclusion:
    "这是一个早停无义变异，多家 ClinVar 提交者将其归为 Pathogenic 或 Likely pathogenic。它与常染色体隐性的 Fanconi anemia complementation group C 明确相关；单个等位变异更常见的解释是携带者状态，不能单独等同于确诊 Fanconi anemia。",
};

export const keyMetrics: Metric[] = [
  {
    label: "ClinVar 临床分类",
    value: "致病 / 可能致病",
    note: "6 个提交记录，Natera、Baylor、Ambry、Labcorp/Invitae 等提交者结论方向一致。",
    sourceId: "clinvarminer-submissions",
  },
  {
    label: "gnomAD 频率",
    value: "~0.00001 至 0.01%",
    note: "不同来源口径和四舍五入方式不同；共同指向该变异在人群中非常罕见。",
    sourceId: "clinvarminer-pathogenic",
  },
  {
    label: "中国 FBOC 队列",
    value: "1/255 = 0.4%",
    note: "2019 年中国 BRCA1/2 阴性家族性乳腺/卵巢癌队列检出 1 例；散发乳腺癌和女性非癌对照未检出。",
    sourceId: "pan-2019",
  },
  {
    label: "Fanconi anemia 总体频率",
    value: "1/100,000 至 1/160,000",
    note: "疾病总体罕见，特定族群有 founder effect，不能用单个变异频率直接推算个人患病。",
    sourceId: "medlineplus-fa",
  },
];

export const mechanismBullets = [
  "FANCC 编码 Fanconi anemia core complex 的组成蛋白，参与 DNA interstrand cross-link 修复。",
  "c.339G>A 把第 113 位色氨酸改成终止密码子，属于 nonsense / stop-gained 变异。",
  "早停通常会触发无义介导 mRNA 降解，或产生截短且功能异常的蛋白。",
  "FANCC 的功能缺失变异是 Fanconi anemia complementation group C 的已知致病机制。",
];

export const scenarios: Scenario[] = [
  {
    title: "最好可能：单等位携带者，无第二个致病变异",
    likelihoodLabel: "常见解释",
    interpretation:
      "若完整检测只发现这一处 FANCC 致病变异，且没有 Fanconi anemia 相关表型，通常解释为携带者状态。本人不因此直接确诊 Fanconi anemia。",
    recommendedAction:
      "保留原始检测报告，做一次遗传咨询；生育规划时可考虑伴侣 FANCC/FA 相关基因检测。",
    tone: "best",
  },
  {
    title: "中间可能：单等位变异叠加家族肿瘤背景",
    likelihoodLabel: "证据有限",
    interpretation:
      "FANCC 单等位携带者的成人肿瘤风险仍有争议。中国 FBOC 研究和若干 FA 通路研究提示可能参与乳腺癌易感，但现有证据不足以像 BRCA1/2 那样直接定量管理。",
    recommendedAction:
      "结合个人和家族肿瘤史，由肿瘤遗传门诊判断是否需要更宽的遗传面板、家系共分离分析或强化筛查。",
    tone: "middle",
  },
  {
    title: "最差可能：存在第二个 FANCC 致病变异或复合杂合",
    likelihoodLabel: "需要排除",
    interpretation:
      "若另一个 FANCC 等位基因也存在致病变异，尤其伴随血细胞减少、发育异常、皮肤色素改变等表现，则需要评估 Fanconi anemia。FA 患者存在骨髓衰竭和 AML、头颈/消化/生殖道等肿瘤风险。",
    recommendedAction:
      "建议由血液科和临床遗传团队评估，必要时做染色体断裂试验、完整 FANCC 拷贝数/测序和家系验证。",
    tone: "worst",
  },
];

export const evidenceSources: EvidenceSource[] = [
  {
    id: "clinvarminer-submissions",
    title: "Submissions by variant: NM_000136.3(FANCC):c.339G>A",
    organization: "ClinVarMiner / ClinVar 提交汇总",
    url: "https://www.clinvarminer.org/submissions-by-variant/NM_000136.3%28FANCC%29%3Ac.339G%3EA%20%28p.Trp113Ter%29",
    evidenceLevel: "高",
    usedFor: "多实验室分类、分子后果、提交者注释。",
    limitation: "ClinVarMiner 是汇总展示；临床使用需回到 ClinVar 原始记录和检测机构报告。",
  },
  {
    id: "clinvarminer-pathogenic",
    title: "FANCC pathogenic variants list",
    organization: "ClinVarMiner",
    url: "https://clinvarminer.genetics.utah.edu/variants-by-gene/FANCC/condition/Hereditary%20cancer-predisposing%20syndrome/pathogenic",
    evidenceLevel: "中",
    usedFor: "rsID、gnomAD frequency 和 FANCC 致病变异列表定位。",
    limitation: "频率受数据库版本、过滤条件和展示精度影响。",
  },
  {
    id: "pan-2019",
    title: "Deleterious Mutations in DNA Repair Gene FANCC Exist in BRCA1/2-Negative Chinese FBOC Patients",
    organization: "Frontiers in Oncology, 2019",
    url: "https://www.frontiersin.org/journals/oncology/articles/10.3389/fonc.2019.00169/full",
    evidenceLevel: "中",
    usedFor: "中国队列检出率、FBOC 背景下的研究证据。",
    limitation: "样本量有限，研究不能单独给出个人外显率或筛查方案。",
  },
  {
    id: "medlineplus-fa",
    title: "Fanconi anemia",
    organization: "MedlinePlus Genetics",
    url: "https://medlineplus.gov/genetics/condition/fanconi-anemia/",
    evidenceLevel: "高",
    usedFor: "疾病频率、遗传方式、FA 患者癌症风险和临床表现概览。",
    limitation: "面向公众的概述，不提供具体变异的个体化解释。",
  },
  {
    id: "farf-guideline",
    title: "Diagnosis of Fanconi Anemia: Testing and Genetic Counseling",
    organization: "Fanconi Anemia Research Fund Clinical Care Guidelines",
    url: "https://fanconi.org/clinical-care-guidelines/diagnosis-of-fanconi-anemia-testing-and-genetic-counseling/",
    evidenceLevel: "高",
    usedFor: "诊断流程、染色体断裂试验和遗传咨询建议。",
    limitation: "指南用于 FA 临床管理，不替代本人的医生判断。",
  },
  {
    id: "alter-2018",
    title: "Cancer in Heterozygote Carriers of Fanconi Anemia Genes",
    organization: "Blood, 2018 摘要",
    url: "https://ashpublications.org/blood/article/132/Supplement%201/3868/265001/Cancer-in-Heterozygote-Carriers-of-Fanconi-Anemia",
    evidenceLevel: "有限",
    usedFor: "说明 FA 基因单等位携带者癌症风险证据不一致，整体风险未见明确升高。",
    limitation: "会议摘要且人群异质，不能排除特定基因、特定癌种或家系背景风险。",
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2015-2026",
    title: "ClinVar 多提交者记录",
    detail: "该变异持续被临床实验室报告，分类集中在 Likely pathogenic / Pathogenic。",
  },
  {
    year: "2019",
    title: "中国 FBOC 队列报告",
    detail: "Pan 等在 255 例 BRCA1/2 阴性家族性乳腺/卵巢癌患者中发现 1 例 c.339G>A。",
  },
  {
    year: "2026",
    title: "FA 临床指南更新",
    detail: "FARF 指南强调 FA 诊断需结合染色体断裂试验、分子检测和遗传咨询。",
  },
];
