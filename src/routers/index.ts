import { checkDuplicatePaths } from "./_utils";
import { analysis } from "./analysis";

const router = {
  path: "/",
  name: "",
  children: {
    analysis,
  },
};

checkDuplicatePaths(router);
export default router;
