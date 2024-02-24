"use client";
import React from "react";
import "@/styles/ScrollableTable.css";
import { RevenueGrowthRate } from "@/types/contracts/finmindtrade";
import { getThousandKSeparator } from "@/utils/math-tools";

type ReportEspTableEntityProps = {
  data: RevenueGrowthRate;
};

const ReportEspTableEntity: React.FC<ReportEspTableEntityProps> = ({
  data,
}) => {
  return (
    <div className="scrollable-table">
      <div className="scrollable-table-header">
        <div>年度月份</div>
        <div>每月销售(千元)</div>
        <div>每月销售年增率 (%)</div>
      </div>

      {data.map((item, _) => (
        <div key={item.date} className="scrollable-table-tr">
          <div style={{ fontWeight: "bold" }}>
            {item.revenue_year}
            {item.revenue_month < 10
              ? `0${item.revenue_month}`
              : item.revenue_month}
          </div>
          <div>{getThousandKSeparator(item.revenue)}</div>
          <div>{item.rate.toFixed(2)} %</div>
        </div>
      ))}
    </div>
  );
};

export default ReportEspTableEntity;
