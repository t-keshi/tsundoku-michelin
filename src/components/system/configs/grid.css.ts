import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "../theme/index.css";
import { breakpoints } from "./breakpoints.css";

export const grid = defineProperties({
  ...breakpoints,
  properties: {
    gridGap: vars.spacing,
    gridColumnGap: vars.spacing,
    gridRowGap: vars.spacing,
    gridColumn: {
      1: "span 1 / span 1",
      2: "span 2 / span 2",
      3: "span 3 / span 3",
      4: "span 4 / span 4",
      5: "span 5 / span 5",
    },
    gridRow: {
      1: "span 1 / span 1",
      2: "span 2 / span 2",
      3: "span 3 / span 3",
      4: "span 4 / span 4",
      5: "span 5 / span 5",
    },
    gridAutoFlow: ["row", "column", "dense", "row dense", "column dense"],
    gridAutoColumns: ["min-content", "max-content", "auto"],
    gridAutoRows: ["min-content", "max-content", "auto"],
    gridTemplateColumns: {
      1: "repeat(1, 1fr)",
      2: "repeat(2, 1fr)",
      3: "repeat(3, 1fr)",
      4: "repeat(4, 1fr)",
      5: "repeat(5, 1fr)",
    },
    gridTemplateRows: {
      1: "repeat(1, 1fr)",
      2: "repeat(2, 1fr)",
      3: "repeat(3, 1fr)",
      4: "repeat(4, 1fr)",
      5: "repeat(5, 1fr)",
    },
  },
});
