"use client";
import * as React from "react";
import Box from "@mui/material/Box";
type AnalysisLayoutProps = {
  children: React.ReactNode;
};
export default function AnalysisLayout(props: AnalysisLayoutProps) {
  return (
    <Box
      component="main"
      sx={{
        width: "1000px",
        margin: "0 auto",
      }}
    >
      {props.children}
    </Box>
  );
}
