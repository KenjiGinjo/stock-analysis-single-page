"use client";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { StyleThemeModeEnum } from "@/styles/types";
import ThemeContext from "@/styles/ThemeContext";
import CONST from "@/CONST";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
type AppThemeProviderProps = {
  children: React.ReactNode;
};
function AppThemeProvider(props: AppThemeProviderProps) {
  const [mode, setMode] = useState<StyleThemeModeEnum>(CONST.DEFAULT_THEME);
  const toggleTheme = () => {
    setMode((prev) =>
      prev === StyleThemeModeEnum.Light
        ? StyleThemeModeEnum.Dark
        : StyleThemeModeEnum.Light
    );
  };

  const theme = createTheme({
    palette: {
      mode: mode,
      ...CONST.theme[mode].MATERIAL_UI.palette,
    },
    shape: {
      borderRadius: 4,
    },
  });

  useEffect(() => {
    Object.entries(CONST.theme[mode].CSS_VALUES).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IconButton
          onClick={toggleTheme}
          style={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
        >
          {mode === StyleThemeModeEnum.Dark ? (
            <DarkModeIcon fontSize="small" />
          ) : (
            <LightModeIcon fontSize="small" />
          )}
        </IconButton>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default AppThemeProvider;
