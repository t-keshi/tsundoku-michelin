import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const listItemButton = recipe({
  base: {
    ...vars.typography.body1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    cursor: "pointer",
    paddingLeft: 16,
    paddingRight: 16,
    selectors: {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
  variants: {
    hasDivider: {
      true: {
        borderBottom: `1px solid ${vars.palette.lightMode.divider}`,
        backgroundClip: "padding-box",
      },
    },
  },
});
