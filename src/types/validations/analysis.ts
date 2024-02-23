import { z } from "zod";

export type vAnalysisSearchQuery = z.infer<typeof vAnalysisSearchQuery>;

export const vAnalysisSearchQuery = z.object({
  keyword: z.string({
    required_error: "搜索关键词不能为空",
    invalid_type_error: "搜索关键词参数错误",
  }),
});
