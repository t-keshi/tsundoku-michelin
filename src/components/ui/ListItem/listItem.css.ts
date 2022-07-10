import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const listItemContainer = recipe({
  base: {
    position: "relative",
  },
});

export const listItem = recipe({
  base: {
    ...vars.typography.body1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "left",
    selectors: {
      "&:hover": {
        textDecoration: "none",
        backgroundColor: vars.palette.lightMode.action.hover,
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
