export type TaiwanStockMonthRevenue = {
  date: string;
  stock_id: string;
  country: string;
  revenue: number;
  revenue_month: number;
  revenue_year: number;
};

export type RevenueGrowthRate = {
  rate: number;
  date: string;
  revenue: number;
  revenue_month: number;
  revenue_year: number;
}[];

export function calculateGrowthRates(
  data: TaiwanStockMonthRevenue[]
): RevenueGrowthRate {
  const growthRates: RevenueGrowthRate = data.map((current, index, array) => {
    const items = {
      date: current.date,
      revenue: current.revenue,
      revenue_month: current.revenue_month,
      revenue_year: current.revenue_year,
    };
    const previousYearData = array.find((item) => {
      return (
        item.revenue_month === current.revenue_month &&
        item.revenue_year === current.revenue_year - 1
      );
    });

    if (!previousYearData) {
      return { rate: 0, ...items };
    }

    const rate = (current.revenue / previousYearData.revenue - 1) * 100;
    return {
      rate,
      ...items,
    };
  });

  return growthRates;
}

export const getTaiwanStockMonthRevenue = async ({
  ticker,
  start_date,
}: {
  ticker: string;
  start_date: string;
}): Promise<Array<TaiwanStockMonthRevenue> | null> => {
  const query = new URLSearchParams({
    dataset: "TaiwanStockMonthRevenue",
    data_id: ticker,
    start_date: start_date,
    token: process.env.FINMINDTRADE_TOKEN as string,
  });

  try {
    const response = await fetch(
      `https://api.finmindtrade.com/api/v4/data?${query.toString()}`
    );
    const json = await response.json();
    return json.data;
  } catch (error) {
    return null;
  }
};
