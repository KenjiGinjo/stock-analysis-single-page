"use client";
import { styled } from "@mui/material/styles";
import Link from "next/link";
export const AnalysisMenuISubItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  width: "120px",
  height: "38px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontSize: "12px",
  position: "relative",
  paddingLeft: "20px",
  "&:before": active && {
    content: "''",
    width: "4px",
    height: "60%",
    position: "absolute",
    left: 0,
    backgroundColor: theme.palette.primary.main,
  },
  fontWeight: active ? "bold" : "normal",
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  "&:hover": {
    "&:before": {
      content: "''",
      width: "4px",
      height: "60%",
      position: "absolute",
      left: 0,
      backgroundColor: theme.palette.primary.main,
    },
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));
