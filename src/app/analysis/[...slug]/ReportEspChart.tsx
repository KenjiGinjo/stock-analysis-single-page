"use client";
import { PaperSelect } from "@/components/base/PaperSelect";
import { PaperTip } from "@/components/base/PaperTip";
import { RevenueGrowthRate } from "@/types/contracts/finmindtrade";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React from "react";
import { ReportEspChartEntity } from "./ReportEspChartEntity";

const selectParams = [
  { name: "近3年", value: "3" },
  { name: "近5年", value: "5", default: true },
  { name: "近8年", value: "8" },
];
type ReportEspChartProps = {
  data: RevenueGrowthRate;
  setYear: (year: string) => void;
};

export function ReportEspChart(props: ReportEspChartProps) {
  return (
    <Paper sx={{ mt: 2 }}>
      <Box
        sx={{ padding: 2, display: "flex", justifyContent: "space-between" }}
      >
        <PaperTip>每月营收</PaperTip>
        <PaperSelect
          list={selectParams}
          onChange={(e) => props.setYear(e.value)}
        />
      </Box>
      <Box sx={{ width: "100%", height: 438 }}>
        <ReportEspChartEntity data={props.data} />
      </Box>
    </Paper>
  );
}
