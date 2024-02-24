import { NextResponse } from "next/server";
import { db } from "../../../../../db";
import { zValidation } from "@/utils/zValidation";
import { vAnalysisSearchQuery } from "@/types/validations";
import CONST from "@/CONST";

export const GET = zValidation(vAnalysisSearchQuery, async (req, res) => {
  const keyword = req.v.keyword;
  const d = await db.stock.findByTicker(keyword);
  const data = d.slice(0, 8).map((item) => {
    return {
      displayContent: `${item.ticker} ${item.name}`,
      ticker: item.ticker,
      url: `${CONST.BASE_URL}/analysis/${item.ticker}/news`,
    };
  });
  return NextResponse.json(data);
});
