import { describe, expect, it } from "vitest";
import { evidenceSources, keyMetrics, scenarios, variantSummary } from "./variantReport";

describe("variantReport data", () => {
  it("保留核心变异标识和风险边界", () => {
    expect(variantSummary.gene).toBe("FANCC");
    expect(variantSummary.variant).toBe("c.339G>A");
    expect(variantSummary.protein).toContain("p.Trp113Ter");
    expect(variantSummary.conclusion).toContain("不能单独等同于确诊");
  });

  it("覆盖频率、情景和证据来源", () => {
    expect(keyMetrics).toHaveLength(4);
    expect(scenarios.map((scenario) => scenario.tone)).toEqual(["best", "middle", "worst"]);
    expect(evidenceSources.some((source) => source.id === "clinvarminer-submissions")).toBe(true);
    expect(evidenceSources.every((source) => source.url.startsWith("https://"))).toBe(true);
  });
});
