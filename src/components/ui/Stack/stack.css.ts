import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const stack = recipe({
  base: {
    display: "flex",
  },
  variants: {
    horizontal: {
      true: {
        flexDirection: "row",
      },
      false: {
        flexDirection: "column",
      },
    },
    spacing: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
    hasDivider: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // horizontal
    {
      variants: {
        horizontal: true,
        spacing: 1,
        hasDivider: true,
      },
      style: {
        columnGap: 1,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 2,
        hasDivider: true,
      },
      style: {
        columnGap: 2,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 3,
        hasDivider: true,
      },
      style: {
        columnGap: 3,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 4,
        hasDivider: true,
      },
      style: {
        columnGap: 4,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 5,
        hasDivider: true,
      },
      style: {
        columnGap: 5,
      },
    },
    // vertical
    {
      variants: {
        horizontal: false,
        spacing: 1,
        hasDivider: true,
      },
      style: {
        rowGap: 1,
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 2,
        hasDivider: true,
      },
      style: {
        rowGap: 2,
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 3,
        hasDivider: true,
      },
      style: {
        rowGap: 3,
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 4,
        hasDivider: true,
      },
      style: {
        rowGap: 4,
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 5,
        hasDivider: true,
      },
      style: {
        rowGap: 5,
      },
    },
  ],
});

export const stackDivider = recipe({
  base: {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: vars.palette.lightMode.divider,
    width: "auto",
    height: "auto",
  },
  variants: {
    horizontal: {
      true: {
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
      false: {
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
    },
    spacing: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    },
  },
  compoundVariants: [
    // horizontal
    {
      variants: {
        horizontal: true,
        spacing: 1,
      },
      style: {
        marginRight: vars.spacing[0.5],
        marginLeft: vars.spacing[0.5],
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 2,
      },
      style: {
        marginRight: vars.spacing[1],
        marginLeft: vars.spacing[1],
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 3,
      },
      style: {
        marginRight: 12,
        marginLeft: 12,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 4,
      },
      style: {
        marginRight: vars.spacing[2],
        marginLeft: vars.spacing[2],
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 5,
      },
      style: {
        marginRight: 20,
        marginLeft: 20,
      },
    },
    // vertial
    {
      variants: {
        horizontal: false,
        spacing: 1,
      },
      style: {
        marginTop: vars.spacing[0.5],
        marginBottom: vars.spacing[0.5],
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 2,
      },
      style: {
        marginTop: vars.spacing[1],
        marginBottom: vars.spacing[1],
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 3,
      },
      style: {
        marginTop: 12,
        marginBottom: 12,
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 4,
      },
      style: {
        marginTop: vars.spacing[2],
        marginBottom: vars.spacing[2],
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 5,
      },
      style: {
        marginTop: 20,
        marginBottom: 20,
      },
    },
  ],
});
