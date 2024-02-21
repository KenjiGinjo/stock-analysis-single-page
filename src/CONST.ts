import { StyleThemeModeEnum } from "./styles/types";

const CONST = {
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
        },
      },
    },
    dark: {
      CSS_VALUES: {
        "--foreground-rgb": "255, 255, 255",
        "--background-color": "#101418",
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
