import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const dialogContainer = recipe({
  base: {
    height: "100%",
    outline: 0,
    overflowY: "auto",
    overflowX: "hidden",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    selectors: {
      "&:after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0",
      },
    },
  },
  variants: {
    size: {
      sm: {
        marginLeft: -2,
      },
    },
  },
});

export const dialogPaper = recipe({
  base: {
    backgroundColor: vars.palette.lightMode.background,
    color: vars.palette.lightMode.text.primary,
    borderRadius: vars.radius,
    margin: 32,
    position: "relative",
    overflowY: "auto",
    verticalAlign: "middle",
    maxHeight: "calc(100% - 64px)",
    textAlign: "left",
  },
  variants: {
    maxWidth: {
      sm: {
        maxWidth: 400,
      },
      md: {
        maxWidth: vars.breakpoints.tablet,
      },
      lg: {
        maxWidth: vars.breakpoints.desktop,
      },
      xl: {
        maxWidth: "calc(100% - 64px)",
      },
    },
    disablePadding: {
      true: {},
      false: {
        padding: vars.spacing[3],
      },
    },
  },
});
