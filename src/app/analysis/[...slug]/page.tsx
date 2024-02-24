import Box from "@mui/material/Box";
import { AnalysisMenu } from "./AnalysisMenu";
import { ReportEsp } from "./ReportEsp";
import router from "@/routers";
import { BlockNone } from "./BlockNone";
const arc = router.children.analysis.children;
export default function Page({ params }: { params: { slug: string[] } }) {
  const ticker = params.slug[0];
  const path = params.slug[1];
  const subPath = params.slug[2];
  const CurrentMain = () => {
    if (`/${path}` === arc.monthlyRevenue.path) {
      if (`/${subPath}` === arc.monthlyRevenue.children.eps.path) {
        return <ReportEsp ticker={ticker} />;
      }
    }
    return <BlockNone />;
  };
  return (
    <Box sx={{ mt: 2, display: "flex", flexGrow: 1 }}>
      <AnalysisMenu ticker={ticker} path={path} subPath={subPath} />
      <CurrentMain />
    </Box>
  );
}
