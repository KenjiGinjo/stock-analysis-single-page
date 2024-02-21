import { createRouter } from "./_utils";
import { IconDemo } from "@/assets/icon/IconDemo";

const monthlyRevenue = createRouter({
  path: "monthly-revenue",
  name: "財務報表",
  summary: "財務報表",
  icon: IconDemo({ letter: "C", color: "434343" }),
});

export const analysis = createRouter({
  path: "/analysis",
  name: "分析",
  summary: "分析",
  children: {
    news: {
      path: "/",
      name: "最新動態",
      summary: "最新動態",
      icon: IconDemo({ letter: "B", color: "434343" }),
    },
    stockHealthCheck: {
      path: "/stock-health-check",
      name: "股票健诊",
      summary: "股票健诊",
      icon: IconDemo({ letter: "F", color: "434343" }),
    },
    monthlyRevenue,
    profitMargin: {
      path: "/profit-margin",
      name: "獲利能力",
      summary: "獲利能力",
      icon: IconDemo({ letter: "D", color: "CA0913" }),
    },
    financialStructureRatio: {
      path: "/financial-structure-ratio",
      icon: IconDemo({ letter: "E", color: "1A841F" }),
      name: "安全性分析",
      summary: "安全性分析",
    },
    monthlyRevenueGrowthRate: {
      path: "/monthly-revenue-growth-rate",
      icon: IconDemo({ letter: "q", color: "E67821" }),
      name: "成長力分析",
      summary: "成長力分析",
    },
    pe: {
      path: "/pe",
      summary: "價值評估",
      name: "價值評估",
      icon: IconDemo({ letter: "J", color: "345BA7" }),
    },
    brokerTrading: {
      path: "/broker-trading",
      summary: "董監與籌碼",
      name: "董監與籌碼",
      icon: IconDemo({ letter: "G", color: "434343" }),
    },
    longTermAndShortTermMonthlyRevenueYoy: {
      path: "/long-term-and-short-term-monthly-revenue-yoy",
      summary: "關鍵指標",
      name: "關鍵指標",
      icon: IconDemo({ letter: "H", color: "74307A" }),
    },
    productSalesFigure: {
      path: "/product-sales-figure",
      summary: "產品組合",
      name: "產品組合",
      icon: IconDemo({ letter: "I", color: "526FD7" }),
    },
  },
});
