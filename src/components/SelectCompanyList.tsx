"use client";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { DctAnalysisSearch } from "@/types/transformers/analysis";
import { Empty } from "./base/Empty";
const ListItem = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));
type SelectCompanyListProps = {
  keywords: string;
  list: Array<DctAnalysisSearch>;
};
export function SelectCompanyList(props: SelectCompanyListProps) {
  const theme = useTheme();

  return (
    <List
      sx={{
        width: "100%",
        top: "calc(100% + 4px)",
        bgcolor: "background.paper",
        position: "absolute",
        overflow: "auto",
        zIndex: 99,
        borderRadius: 1,
        boxShadow: 1,
        padding: 0,
        paddingTop: 1,
        fontSize: 14,
      }}
    >
      <Divider
        textAlign="left"
        sx={{
          fontSize: 12,
          color: "text.disabled",
        }}
      >
        查詢個股
      </Divider>

      {props.list.length === 0
        ? Empty.Search
        : props.list.map((item) => {
            const highlightedContent = item.displayContent.replace(
              new RegExp(props.keywords, "gi"),
              (match) =>
                `<span style="color: ${theme.palette.primary.main};font-weight:bold">${match}</span>`
            );

            return (
              <ListItem
                key={item.ticker}
                sx={{ padding: 0, borderBottom: "1px solid divider" }}
              >
                <ListItemButton
                  onClick={() => {
                    window.location.href = item.url;
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: highlightedContent }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
    </List>
  );
}
