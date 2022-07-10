import { recipe } from "@vanilla-extract/recipes";

export const grid = recipe({
  base: {
    display: "grid",
  },
  variants: {
    inline: {
      true: {
        display: "inline-grid",
      },
    },
  },
});
