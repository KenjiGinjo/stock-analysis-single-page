import * as React from "react";
import Box from "@mui/material/Box";
import routers from "@/routers";
import CONST from "@/CONST";
import { AnalysisMenuItem } from "./AnalysisMenuItem";
import Divider from "@mui/material/Divider";
import { AnalysisMenuISubItem } from "./AnalysisMenuISubItem";

const arc = routers.children.analysis.children;
type AnalysisMenuProps = {
  ticker: string;
  path: string;
  subPath?: string;
};
export function AnalysisMenu(props: AnalysisMenuProps) {
  const current: any = Object.values(arc).find(
    (r) => r.path === `/${props.path}`
  );
  return (
    <Box sx={{ mt: 2, display: "flex" }}>
      <Box>
        {Object.entries(arc).map(([key, value]: [string, any]) => {
          const firstChild: any =
            value?.children && Object.values(value.children)?.[0];

          return (
            <AnalysisMenuItem
              key={key}
              active={value.path === `/${props.path}`}
              href={`${CONST.BASE_URL}${routers.children.analysis.path}/${
                props.ticker
              }${value.path}${firstChild ? firstChild.path : ""}`}
              className="analysis-menu-item"
            >
              {value.icon}
              <div>{value.name}</div>
            </AnalysisMenuItem>
          );
        })}
      </Box>
      <Divider orientation="vertical" flexItem />
      {props.subPath && (
        <Box sx={{ mt: 2 }}>
          {Object.entries(current.children).map(
            ([key, value]: [string, any]) => {
              return (
                <AnalysisMenuISubItem
                  key={key}
                  active={value.path === `/${props.subPath}`}
                  href={`${CONST.BASE_URL}${routers.children.analysis.path}/${props.ticker}${current.path}${value.path}`}
                  className="analysis-menu-sub-item"
                >
                  <div>{value.name}</div>
                </AnalysisMenuISubItem>
              );
            }
          )}
        </Box>
      )}
    </Box>
  );
}
