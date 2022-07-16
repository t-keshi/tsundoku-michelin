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
    },
  },
});

const MEDIA_HEIGHT = 200;

export const cardMedia = recipe({
  base: {
    height: 200,
    width: "100%",
    position: "relative",
  },
});

export const cardContent = recipe({
  base: {
    paddingRight: vars.spacing[2],
    paddingLeft: vars.spacing[2],
    paddingTop: vars.spacing[2],
    paddingBottom: vars.spacing[1],
    marginTop: vars.spacing[1],
    height: `calc(100% - ${MEDIA_HEIGHT}px)`,
    display: "grid",
    gridTemplateRows: "auto 1fr",
  },
});

export const cardFooter = recipe({
  base: {
    marginTop: "auto",
    paddingBottom: vars.spacing[1],
  },
});

export const cardTitle = recipe({
  base: {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
});
