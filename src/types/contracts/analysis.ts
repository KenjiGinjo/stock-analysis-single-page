import type { DctAnalysisSearch } from "@/types/transformers/analysis";
import { vAnalysisSearchQuery } from "@/types/validations";
import { initContract } from "@ts-rest/core";

const c = initContract();

export const analysis = c.router({
  search: {
    $get: {
      method: "GET",
      path: "/analysis/api/search",
      responses: {
        200: c.type<DctAnalysisSearch[]>(),
      },
      query: vAnalysisSearchQuery,
      summary: "按股票代码搜索公司",
    },
  },
});
