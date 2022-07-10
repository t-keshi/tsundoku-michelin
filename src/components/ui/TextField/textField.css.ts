import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const textField = recipe({
  base: {
    outline: "none",
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    margin: 0,
    WebkitTapHighlightColor: "transparent",
    display: "block",
    minWidth: 0,
  },
  variants: {
    variant: {
      outlined: {
        border: `1px solid ${vars.palette.lightMode.divider}`,
        selectors: {
          "&:focus": {
            outline: `solid ${vars.palette.primary.main}`,
          },
        },
      },
      standard: {},
    },
    size: {
      sm: {
        padding: "4px 0",
        textIndent: 14,
      },
      md: {
        padding: "8.5px 0",
        textIndent: 14,
      },
    },
    rounded: {
      true: {
        borderRadius: "9999px",
      },
      false: {
        borderRadius: vars.radius,
      },
    },
  },
});
