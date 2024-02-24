import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { db } from "../../../../db";
import {
  calculateGrowthRates,
  getTaiwanStockMonthRevenue,
} from "@/types/contracts/finmindtrade";
import { subYears } from "date-fns";
import { dateFormat } from "@/utils/moment";
import { ReportEspData } from "./ReportEspData";

type ReportEspProps = {
  ticker: string;
};
const getCompanyByTricker = (ticker: string) => {
  return db.stock.findByTicker(ticker)[0];
};
export async function ReportEsp(props: ReportEspProps) {
  const company = getCompanyByTricker(props.ticker);
  const fiveYearsAgo = dateFormat(subYears(new Date(), 5), "Y-M-D");
  const d = await getTaiwanStockMonthRevenue({
    ticker: props.ticker,
    start_date: fiveYearsAgo,
  });
  const data = calculateGrowthRates(d ? d : []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ padding: "10px 20px" }}>
        <h1>
          {company?.name}({company?.ticker})
        </h1>
      </Paper>
      <ReportEspData data={data} ticker={props.ticker} />
    </Box>
  );
}
