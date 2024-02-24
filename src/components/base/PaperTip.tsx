"use client";
import { styled } from "@mui/material/styles";

export const PaperTip = styled("div")(({ theme }) => ({
  width: "92px",
  height: "34px",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.getContrastText(theme.palette.primary.dark),
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "2px",
}));
