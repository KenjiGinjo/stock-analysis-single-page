import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@/components/AppBar";
type AppLayoutProps = {
  children: React.ReactNode;
};
export default function AppLayout(props: AppLayoutProps) {
  return (
    <Box>
      <AppBar />
      {props.children}
    </Box>
  );
}
