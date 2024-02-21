import { checkDuplicatePaths } from "./_utils";
import { analysis } from "./analysis";

const router = {
  path: "/",
  name: "",
  children: {
    analysis,
  },
};

export default checkDuplicatePaths(router);
