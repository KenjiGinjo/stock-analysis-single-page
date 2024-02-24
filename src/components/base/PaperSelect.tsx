"use client";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import React, { useEffect, useRef } from "react";

const StyleButton = styled(Button)(({ theme }) => ({
  width: "92px",
  height: "34px",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.getContrastText(theme.palette.primary.dark),
  fontSize: "12px",
  borderRadius: "2px",
}));
const ListItem = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderBottom: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  fontSize: "12px",
  "&:last-child": {
    borderBottom: "none",
  },
}));
type SelectListItem = {
  name: string;
  value: string;
  default?: boolean;
};
type PaperSelectProps = {
  list: SelectListItem[];
  onChange: (item: SelectListItem) => void;
};
export function PaperSelect(props: PaperSelectProps) {
  const defaultItem = props.list?.find((item) => item?.default);
  const [selectOpen, setSelectOpen] = React.useState(false);
  const buttonRef = useRef<any>(null);

  const handleClickOutside = (event: Event) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setSelectOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <StyleButton
      ref={buttonRef}
      variant="contained"
      onClick={() => setSelectOpen((prev) => !prev)}
    >
      {defaultItem?.name}
      <KeyboardArrowDownIcon sx={{ fontSize: 14, ml: 1 }} />
      {selectOpen && (
        <List
          sx={{
            width: "100%",
            top: "calc(100% + 2px)",
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
          {props.list.map((item) => (
            <ListItem key={item.value}>
              <ListItemButton onClick={() => props.onChange(item)}>
                {item.name}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </StyleButton>
  );
}
