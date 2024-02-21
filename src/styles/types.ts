enum StyleThemeModeEnum {
  Light = "light",
  Dark = "dark",
}
type StyleTheme = {
  mode: StyleThemeModeEnum;
  toggleTheme: () => void;
};

export { type StyleTheme, StyleThemeModeEnum };
