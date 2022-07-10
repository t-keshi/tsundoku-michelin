import { recipe } from "@vanilla-extract/recipes";

export const flex = recipe({
  base: {
    display: "flex",
  },
  variants: {
    inline: {
      true: {
        display: "inline-flex",
      },
    },
  },
});
