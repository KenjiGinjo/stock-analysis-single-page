"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CONST from "@/CONST";
import { SearchInput } from "./SearchInput";

const AppBar = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "64px",
  backgroundColor: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              left: "30px",
            }}
          >
            {CONST.APP_NAME}
          </Typography>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
