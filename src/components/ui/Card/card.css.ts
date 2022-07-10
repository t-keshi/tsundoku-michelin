import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";
import { createTransition } from "../../system/utils/transition";

export const card = recipe({
  base: {
    transition: createTransition(["box-shadow"]),
    borderRadius: vars.radius,
    overflow: "hidden",
  },
  variants: {
    outlined: {
      true: {
        border: `1px solid ${vars.palette.lightMode.divider}`,
      },
    },
    square: {
      true: {
        borderRadius: 0,
      },
    },
    variants: {
      outlined: {
        border: `1px solid ${vars.palette.lightMode.divider}`,
      },
    },
    color: {
      paper: {
        backgroundColor: vars.palette.lightMode.background,
      },
      inherit: {
        color: "inherit",
      },
    },
    elevation: {
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
      4: {
        boxShadow: vars.shadow[4],
      },
      5: {
        boxShadow: vars.shadow[5],
      },
    },
  },
});
