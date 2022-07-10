import { recipe } from "@vanilla-extract/recipes";

export const stack = recipe({
  base: {
    display: "flex",
  },
  variants: {
    horizontal: {
      true: {},
      false: {
        flexDirection: "column",
      },
    },
  },
});

export const stackMargin = recipe({
  base: {
    display: "flex",
  },
  variants: {
    horizontal: {
      true: {},
      false: {},
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
    {
      variants: {
        horizontal: true,
        spacing: 1,
      },
      style: {
        marginLeft: 8,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 2,
      },
      style: {
        marginLeft: 16,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 3,
      },
      style: {
        marginLeft: 24,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 4,
      },
      style: {
        marginLeft: 32,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 5,
      },
      style: {
        marginLeft: 40,
      },
    },
    {
      variants: {
        horizontal: false,
        spacing: 1,
      },
      style: {
        marginTop: 8,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 2,
      },
      style: {
        marginTop: 16,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 3,
      },
      style: {
        marginTop: 24,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 4,
      },
      style: {
        marginTop: 32,
      },
    },
    {
      variants: {
        horizontal: true,
        spacing: 5,
      },
      style: {
        marginTop: 40,
      },
    },
  ],
});
