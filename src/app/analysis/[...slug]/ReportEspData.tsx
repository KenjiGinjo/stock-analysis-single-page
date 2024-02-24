"use client";
import { RevenueGrowthRate } from "@/types/contracts/finmindtrade";
import { ReportEspChart } from "./ReportEspChart";
import { ReportEspTable } from "./ReportEspTable";
import { useEffect, useState } from "react";
import { subYears } from "date-fns";
import { dateFormat } from "@/utils/moment";
import { API_CLIENT } from "@/API_CLIENT";

type ReportEspDateProps = {
  ticker: string;
  data: RevenueGrowthRate;
};
export function ReportEspData(props: ReportEspDateProps) {
  const [data, setData] = useState(props.data);
  const [year, setYear] = useState("5");
  const [initialRender, setInitialRender] = useState(true);
  const [initialRender2, setInitialRender2] = useState(true);
  const queryKey = ["esp", props.ticker, year];
  const { data: rqData, refetch } = API_CLIENT.esp.$get.useQuery(
    queryKey,
    {
      query: {
        ticker: props.ticker,
        start_date: dateFormat(subYears(new Date(), Number(year)), "Y-M-D"),
      },
    },
    {
      queryKey,
      enabled: false,
    }
  );

  useEffect(() => {
    if (!initialRender) {
      refetch();
    }
    if (initialRender) {
      setInitialRender(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);
  useEffect(() => {
    if (!initialRender2 && rqData?.body) {
      setData(rqData.body);
    }
    if (initialRender2) {
      setInitialRender2(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rqData]);

  return (
    <>
      <ReportEspChart data={data} setYear={setYear} />
      <ReportEspTable data={data} />
    </>
  );
}
