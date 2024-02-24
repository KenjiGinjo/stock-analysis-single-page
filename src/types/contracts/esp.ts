import { vFinmindTradeQuery } from "@/types/validations";
import { initContract } from "@ts-rest/core";
import { RevenueGrowthRate } from "./finmindtrade";

const c = initContract();

export const esp = c.router({
  $get: {
    method: "GET",
    path: "/analysis/api/esp",
    responses: {
      200: c.type<RevenueGrowthRate>(),
    },
    query: vFinmindTradeQuery,
    summary: "查询每股盈余",
  },
});
