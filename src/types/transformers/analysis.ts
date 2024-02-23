import { Expose } from "class-transformer";

export class DctAnalysis {
  @Expose()
  name: string;
  @Expose()
  ticker: string;
  @Expose()
  type: string;
  @Expose()
  market: string;
  updateAt: Date;
}

export class DctAnalysisSearch {
  @Expose()
  displayContent: string;
  @Expose()
  ticker: string;
  @Expose()
  url: string;
}
