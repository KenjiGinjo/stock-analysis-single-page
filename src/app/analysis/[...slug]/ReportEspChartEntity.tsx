"use client";
import { RevenueGrowthRate } from "@/types/contracts/finmindtrade";
import { getThousandKSeparator } from "@/utils/math-tools";
import { useTheme } from "@mui/material";
import React, { useState } from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
  Bar,
  ComposedChart,
  Label,
} from "recharts";

const barColor = "#F1AC02";
const lineColor = "#CB4B4B";
type ReportEspChartProps = {
  data: RevenueGrowthRate;
};

function CustomTick(props: any) {
  const {
    payload: { value },
  } = props;
  const [year] = value.split("-");

  return <Text {...props}>{year}</Text>;
}
const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data: any = payload[0].payload;

    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
          fontSize: "12px",
          borderRadius: "5px",
        }}
      >
        <p>
          每月营收:{" "}
          <span className="largerFont">{`${getThousandKSeparator(
            data.revenue
          )}`}</span>
          千元
        </p>
        <p style={{ marginTop: "5px" }}>
          单月营收年增率:{" "}
          <span className="largerFont">{`${data.rate.toFixed(2)}`}</span>%
        </p>
        <p
          style={{ fontSize: "10px", marginTop: "15px", textAlign: "center" }}
        >{`${data.revenue_year}年${data.revenue_month}月`}</p>
      </div>
    );
  }

  return null;
};
const CustomLegend = (props: any) => {
  const { payload, onLegendClick, hiddenSeries } = props;
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: -30,
        left: 100,
      }}
    >
      {payload.map((entry: any, index: number) => (
        <li
          key={`item-${index}`}
          onClick={() => onLegendClick(entry.value)}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            marginRight: 10,
            fontSize: 12,
          }}
        >
          <div
            style={{
              width: 18,
              height: 10,
              backgroundColor: !hiddenSeries.includes(entry.value)
                ? entry.color
                : "transparent",
              border: `1px solid ${entry.color}`,
              marginRight: 5,
            }}
          />
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export function ReportEspChartEntity(props: ReportEspChartProps) {
  const [hiddenSeries, setHiddenSeries] = useState<string[]>([]);

  const handleLegendClick = (value: string) => {
    setHiddenSeries((currentHidden) =>
      currentHidden.includes(value)
        ? currentHidden.filter((name) => name !== value)
        : [...currentHidden, value]
    );
  };
  const theme = useTheme();
  const dividerColor = theme.palette.divider;
  const textColor = theme.palette.text.primary;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={props.data}
        margin={{
          top: 40,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke={dividerColor} />
        <XAxis
          dataKey="date"
          height={10}
          tickSize={5}
          fontSize={12}
          tick={<CustomTick />}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          type="number"
          stroke={textColor}
          fontSize={10}
          strokeWidth={0}
          domain={["0", "auto"]}
          tickFormatter={(value) => {
            return getThousandKSeparator(value);
          }}
        >
          <Label
            value="千元"
            angle={0}
            fontSize={12}
            fontWeight={500}
            position={{
              x: 28,
              y: -20,
            }}
            style={{ textAnchor: "start", fill: textColor }}
          />
        </YAxis>
        <YAxis
          yAxisId="right"
          orientation="right"
          type="number"
          stroke={textColor}
          fontSize={10}
          strokeWidth={0}
          domain={([dataMin, dataMax]) => {
            const absMax = Math.ceil(
              Math.max(Math.abs(dataMin), Math.abs(dataMax))
            );
            return [-absMax, absMax];
          }}
          tickFormatter={(value) => {
            return `${value}%`;
          }}
        >
          <Label
            value="百分比"
            angle={0}
            fontSize={12}
            fontWeight={500}
            position={{
              x: -8,
              y: -20,
            }}
            style={{ textAnchor: "start", fill: textColor }}
          />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          align="center"
          verticalAlign="top"
          content={
            <CustomLegend
              onLegendClick={handleLegendClick}
              hiddenSeries={hiddenSeries}
            />
          }
        />
        <Bar
          name="每月营收"
          yAxisId="left"
          dataKey="revenue"
          height={100}
          shape={(props: any) => {
            const { fill, x, y, width, height } = props;
            const barFillColor = fill;
            const barOpacity = 0.5;
            const strokeColor = barColor;
            const strokeWidth = 1;

            return (
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                fill={barFillColor}
                fillOpacity={barOpacity}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
              />
            );
          }}
          fill={barColor}
          hide={hiddenSeries.includes("每月营收")}
        />
        <Line
          yAxisId="right"
          name="单月营收年增率"
          dot={false}
          strokeWidth={2}
          type="bump"
          dataKey="rate"
          stroke={lineColor}
          hide={hiddenSeries.includes("单月营收年增率")}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
