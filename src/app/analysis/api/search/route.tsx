import { NextResponse } from "next/server";
import { db } from "../../../../../db";
import { zValidation } from "@/utils/zValidation";
import { vAnalysisSearchQuery } from "@/types/validations";
import { DctAnalysisSearch } from "@/types/transformers/analysis";
import CONST from "@/CONST";

export const GET = zValidation(vAnalysisSearchQuery, async (req, res) => {
  const keyword = req.v.keyword;
  const data: DctAnalysisSearch[] = db.stock
    .findByTicker(keyword)
    .slice(0, 8)
    .map((item) => {
      return {
        displayContent: `${item.ticker} ${item.name}`,
        ticker: item.ticker,
        url: `${CONST.BASE_URL}/analysis/${item.ticker}`,
      };
    });
  return NextResponse.json(data);
});
