import { z } from "zod";

export type vAnalysisSearchQuery = z.infer<typeof vAnalysisSearchQuery>;

export const vAnalysisSearchQuery = z.object({
  keyword: z.string({
    required_error: "搜索关键词不能为空",
    invalid_type_error: "搜索关键词参数错误",
  }),
});

export type vFinmindTradeQuery = z.infer<typeof vFinmindTradeQuery>;

export const vFinmindTradeQuery = z.object({
  ticker: z.string({
    required_error: "代号不能为空",
    invalid_type_error: "代号参数错误",
  }),

  start_date: z.string({
    required_error: "开始日期不能为空",
    invalid_type_error: "开始日期参数错误",
  }),
});
