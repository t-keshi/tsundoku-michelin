import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const listItemIcon = recipe({
  base: {
    color: vars.palette.lightMode.action.active,
    flexShrink: 0,
    display: "inline-flex",
  },
  variants: {
    size: {
      sm: {
        minWidth: 36,
      },
      md: {
        minWidth: 56,
      },
    },
  },
});
