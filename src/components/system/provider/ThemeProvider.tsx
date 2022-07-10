import { createStateContext } from "./createContext";

export const [useTheme, ThemeProvider] = createStateContext<{
  theme: "light" | "dark";
}>({
  theme: "light",
});
