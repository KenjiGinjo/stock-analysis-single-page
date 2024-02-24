"use client";

import { useTheme } from "@mui/material";

export function BlockNone() {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "150px",
        width: "100%",
        fontSize: "12px",
        color: theme.palette.text.secondary,
      }}
    >
      暂无内容
    </div>
  );
}
