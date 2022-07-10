const lightModePalette = {
  lightMode: {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: "#ffffff",
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      activeHover: "rgba(0, 0, 0, 0.58)",
      hoverOpacity: "0.04",
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: "0.08",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: "0.38",
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: "0.12",
      activatedOpacity: "0.12",
    },
  },
};

const darkModePalette = {
  darkMode: {
    text: {
      primary: "#ffffff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: "#121212",
    action: {
      active: "#ffffff",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: "0.08",
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: "0.16",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: "0.38",
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: "0.12",
      activatedOpacity: "0.24",
    },
  },
};

export const paletteVars = {
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      light: "#e2eff9",
      main: "#2185d0",
      dark: "#00599e",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#e5ffbb",
      main: "#b2d18a",
      dark: "#82a05c",
      contrastText: "#000000",
    },
    success: {
      light: "#4caf50",
      main: "#2e7d32",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    error: {
      light: "#ef5350",
      main: "#d32f2f",
      dark: "#c62828",
      contrastText: "#ffffff",
    },
    info: {
      light: "#f8f8f9",
      main: "#202020",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    ...lightModePalette,
    ...darkModePalette,
  },
};
