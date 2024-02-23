import BlockIcon from "@mui/icons-material/Block";
import { useTheme } from "@mui/material";
import type { ReactNode } from "react";

interface EmptyProps {
  message: ReactNode;
  showIcon?: boolean;
}

const Emp = ({ message, showIcon = true }: EmptyProps) => {
  const theme = useTheme();
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.divider,
        fontSize: "12px",
        padding: "20px",
      }}
    >
      {showIcon && <BlockIcon fontSize="small" />}
      <div>{message}</div>
    </div>
  );
};

export const Empty = {
  Search: <Emp message="暂无相关数据" showIcon={false} />,
};
