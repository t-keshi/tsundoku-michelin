import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const label = recipe({
  base: {
    display: "block",
    transformOrigin: "top left",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    color: vars.palette.lightMode.text.secondary,
    ...vars.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    marginBottom: vars.spacing[1],
  },
  variants: {
    hasError: {
      true: {
        color: vars.palette.error.main,
      },
    },
  },
});

export const asterisk = recipe({
  base: {
    color: vars.palette.error.main,
  },
});
