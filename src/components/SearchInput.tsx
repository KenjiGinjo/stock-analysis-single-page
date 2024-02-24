"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { useDebounce } from "use-debounce";
import { API_CLIENT } from "@/API_CLIENT";
import { SelectCompanyList } from "./SelectCompanyList";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  border: `1px solid ${theme.palette.divider}`,
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "280px",
      "&:focus": {
        width: "320px",
      },
    },
    "&::placeholder": {
      opacity: 1,
    },
  },
}));
export function SearchInput() {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [initialRender, setInitialRender] = useState(true);
  const [keyword] = useDebounce(input, 220);
  const queryKey = ["analysis-search", keyword];
  const { isLoading, data, refetch } = API_CLIENT.analysis.search.$get.useQuery(
    queryKey,
    { query: { keyword: keyword } },
    { staleTime: Infinity, enabled: false, queryKey }
  );
  const list = data?.body || [];
  useEffect(() => {
    if (input && keyword && !initialRender) {
      refetch();
    }
    if (initialRender) {
      setInitialRender(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);
  const goAnalysisPage = () => {
    if (!input) return;
    if (list.length === 0) return;
    window.location.href = list[0].url;
  };
  return (
    <Search>
      <StyledInputBase
        placeholder="輸入台／美股代號，查看公司價值"
        inputProps={{ "aria-label": "搜索台股或美股代号，查看公司价值" }}
        onChange={(e) => setInput(e.target.value.trim())}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            goAnalysisPage();
          }
        }}
      />
      <IconButton
        sx={{ position: "absolute", right: 5 }}
        onClick={goAnalysisPage}
      >
        <SearchIcon fontSize="small" />
      </IconButton>
      {!initialRender && !isLoading && keyword && (
        <SelectCompanyList keywords={keyword} list={list} />
      )}
    </Search>
  );
}
