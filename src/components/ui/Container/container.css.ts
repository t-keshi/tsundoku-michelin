import { recipe } from "@vanilla-extract/recipes";
import { breakpoints } from "../../system/configs/breakpoints.css";
import { vars } from "../../system/theme/index.css";
import { mq } from "../../system/utils/mediaQuery";

export const container = recipe({
  ...breakpoints,
  base: {
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "block",
    paddingLeft: 16,
    paddingRight: 16,
    "@media": {
      [mq("tablet")]: {
        paddingLeft: 24,
        paddingRight: 24,
      },
    },
  },
  variants: {
    inline: {
      true: {
        display: "inline-flex",
      },
    },
    maxWidth: {
      mobile: {
        maxWidth: vars.breakpoints.mobile,
      },
      tablet: {
        maxWidth: vars.breakpoints.tablet,
      },
      desktop: {
        maxWidth: vars.breakpoints.desktop,
      },
    },
    disablePadding: {
      true: {
        padding: 0,
      },
    },
  },
});
