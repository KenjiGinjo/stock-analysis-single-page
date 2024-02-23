import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { DctAnalysis } from "@/types/transformers/analysis";
let DATA: DctAnalysis[] = [];
const csvFilePath = path.resolve("db", "stock.csv");
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (data) => DATA.push(data));
export const stock = {
  findByTicker: (ticker: string) => {
    return DATA.filter((stock: any) =>
      stock.ticker.toLowerCase().includes(ticker.toLowerCase())
    );
  },
};
