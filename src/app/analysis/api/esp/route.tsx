import { NextResponse } from "next/server";
import { zValidation } from "@/utils/zValidation";
import { vFinmindTradeQuery } from "@/types/validations";

import {
  calculateGrowthRates,
  getTaiwanStockMonthRevenue,
} from "@/types/contracts/finmindtrade";

export const GET = zValidation(vFinmindTradeQuery, async (req, res) => {
  const tricker = req.v.ticker;
  const start_date = req.v.start_date;

  const d = await getTaiwanStockMonthRevenue({
    ticker: tricker,
    start_date: start_date,
  });
  const data = calculateGrowthRates(d ? d : []);

  return NextResponse.json(data);
});
