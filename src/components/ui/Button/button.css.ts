import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const button = recipe({
  base: {
    padding: "6px 16px",
    display: "inline-flex",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    alignItems: "center",
    outline: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    borderRadius: 6,
    backgroundColor: "inherit",
  },
  variants: {
    color: {
      inherit: {},
      primary: {},
      secondary: {},
    },
    variant: {
      contained: {},
      outlined: {},
      text: {
        ...vars.typography.button,
        color: vars.palette.lightMode.text.secondary,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        color: "inherit",
        variant: "contained",
      },
      style: {
        color: "inherit",
        border: "none",
        background: vars.palette.lightMode.action.active,
        ":hover": {
          background: vars.palette.lightMode.action.hover,
        },
      },
    },
    {
      variants: {
        color: "primary",
        variant: "contained",
      },
      style: {
        color: vars.palette.primary.contrastText,
        border: "none",
        background: vars.palette.primary.main,
        ":hover": {
          background: vars.palette.primary.dark,
        },
      },
    },
    {
      variants: {
        color: "secondary",
        variant: "contained",
      },
      style: {
        color: vars.palette.secondary.contrastText,
        border: "none",
        background: vars.palette.secondary.main,
        ":hover": {
          background: vars.palette.secondary.dark,
        },
      },
    },
    {
      variants: {
        color: "inherit",
        variant: "outlined",
      },
      style: {
        border: `1px solid ${vars.palette.lightMode.divider}`,
        ":hover": {
          background: vars.palette.lightMode.action.hover,
        },
      },
    },
    {
      variants: {
        color: "primary",
        variant: "outlined",
      },
      style: {
        color: vars.palette.primary.main,
        border: `1px solid ${vars.palette.primary.main}`,
        ":hover": {
          background: vars.palette.lightMode.action.hover,
        },
      },
    },
    {
      variants: {
        color: "secondary",
        variant: "outlined",
      },
      style: {
        color: vars.palette.secondary.main,
        border: `1px solid ${vars.palette.secondary.main}`,
        ":hover": {
          background: vars.palette.lightMode.action.hover,
        },
      },
    },
  ],
});

export const buttonStartIcon = recipe({
  base: {
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
  },
  variants: {
    size: {
      sm: {
        marginLeft: -2,
      },
    },
  },
});

export const buttonEndIcon = recipe({
  base: {
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
  },
  variants: {
    size: {
      sm: {
        marginRight: -2,
      },
    },
  },
});
