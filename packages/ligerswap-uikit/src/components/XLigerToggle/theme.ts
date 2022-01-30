import { darkColors, lightColors } from "../../theme/colors";
import { XLigerToggleTheme } from "./types";

export const light: XLigerToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: XLigerToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
