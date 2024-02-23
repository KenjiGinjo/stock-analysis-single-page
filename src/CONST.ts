import { PaletteOptions } from "@mui/material/styles/createPalette";
import { StyleThemeModeEnum } from "./styles/types";

const CONST = {
  APP_NAME: "斯塔克科技",
  BASE_URL: process.env.NEXT_PUBLIC_URL as string,
  DEFAULT_THEME: StyleThemeModeEnum.Light,
  theme: {
    light: {
      CSS_VALUES: {
        "--foreground-rgb": "0, 0, 0",
        "--background-color": "#ededed",
      },
      MATERIAL_UI: {
        palette: {
          primary: {
            main: "#0586F4",
          },
        } as PaletteOptions,
      },
    },
    dark: {
      CSS_VALUES: {
        "--foreground-rgb": "255, 255, 255",
        "--background-color": "#121212",
      },
      MATERIAL_UI: {
        palette: {
          primary: {
            main: "#ffffff",
          },
        },
      },
    },
  },
};

export default CONST;
