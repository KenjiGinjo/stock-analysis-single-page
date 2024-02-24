import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { RevenueGrowthRate } from "@/types/contracts/finmindtrade";
import { ReportEspChart } from "./ReportEspChart";
import { format, subYears } from "date-fns";
import { dateFormat } from "@/utils/moment";
import { PaperTip } from "@/components/base/PaperTip";
import ReportEspTableEntity from "./ReportEspTableEntity";
type ReportEspTableProps = {
  data: RevenueGrowthRate;
};
export function ReportEspTable(props: ReportEspTableProps) {
  return (
    <Paper sx={{ mt: 2, mb: 4, pb: 2 }}>
      <Box
        sx={{ padding: 2, display: "flex", justifyContent: "space-between" }}
      >
        <PaperTip>详细数据</PaperTip>
      </Box>
      <Box sx={{ width: "100%" }}>
        <ReportEspTableEntity data={props.data} />
      </Box>
    </Paper>
  );
}
