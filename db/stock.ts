import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { DctAnalysis } from "@/types/transformers/analysis";

async function loadData(): Promise<DctAnalysis[]> {
  const csvFilePath = path.resolve("db", "stock.csv");
  let data: DctAnalysis[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (row) => data.push(row as DctAnalysis))
      .on("end", () => {
        resolve(data);
      })
      .on("error", reject);
  });
}

export const stock = {
  findByTicker: async (ticker: string) => {
    const DATA: DctAnalysis[] = await loadData();
    return DATA.filter((stock: any) =>
      stock.ticker.toLowerCase().includes(ticker.toLowerCase())
    );
  },
};
