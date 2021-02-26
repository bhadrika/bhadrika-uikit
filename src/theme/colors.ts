import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#F4B5C7",
  primaryBright: "#F4B5C7",
  primaryDark: "#F4B5C7",
  secondary: "#2DBF82",
  success: "#2DBF82",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fffafb",
  backgroundDisabled: "#fffafb",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#d8f2ec",
  inputSecondary: "#2DBF82",
  tertiary: "#EFF4F5",
  text: "#2DBF82",
  textDisabled: "#BDC2C4",
  textSubtle: "#2DBF82",
  borderColor: "#d8f2ec",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
