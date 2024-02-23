import CONST from "@/CONST";
import { initQueryClient } from "@ts-rest/react-query";
import { contracts } from "./types/contracts";

export const API_CLIENT = initQueryClient(contracts, {
  baseUrl: CONST.BASE_URL,
  baseHeaders: {},
});
