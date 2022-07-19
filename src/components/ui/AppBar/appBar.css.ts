import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const appBar = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    flexShrink: 0,
    position: "fixed",
    zIndex: vars.zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,

    borderRadius: 0,
  },
  variants: {
    color: {
      default: {
        backgroundColor: vars.palette.lightMode.background,
      },
      primary: {
        backgroundColor: vars.palette.primary.light,
      },
    },
    outlined: {
      true: {
        border: `1px solid ${vars.palette.lightMode.divider}`,
      },
    },
    variants: {
      outlined: {
        border: `1px solid ${vars.palette.lightMode.divider}`,
      },
    },
    shadow: {
      0: {
        boxShadow: vars.shadow[0],
      },
      1: {
        boxShadow: vars.shadow[1],
      },
      2: {
        boxShadow: vars.shadow[2],
      },
      3: {
        boxShadow: vars.shadow[3],
      },
      neumorphism: {
        boxShadow: vars.shadow.neumorphism,
      },
    },
  },
});
