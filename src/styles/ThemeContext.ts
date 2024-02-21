import React from "react";
import CONST from "@/CONST";
import { StyleTheme } from "./types";

const ThemeContext = React.createContext<StyleTheme>({
  mode: CONST.DEFAULT_THEME,
  toggleTheme: () => {},
});

export default ThemeContext;
