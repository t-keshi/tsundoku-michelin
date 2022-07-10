import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "../theme/index.css";
import { breakpoints } from "./breakpoints.css";

const flexAdjustProperties = [
  "start",
  "end",
  "flex-start",
  "flex-end",
  "center",
  "normal",
  "baseline",
  "space-between",
  "space-around",
  "space-evenly",
];

export const flex = defineProperties({
  ...breakpoints,
  properties: {
    flexDirection: ["row", "column"],
    justifyContent: flexAdjustProperties,
    justifyItems: flexAdjustProperties,
    justifySelf: flexAdjustProperties,
    alignContent: flexAdjustProperties,
    alignItems: flexAdjustProperties,
    alignSelf: flexAdjustProperties,
    flexGrow: {
      0: 0,
      1: 1,
    },
    flexShrink: {
      0: 0,
      1: 1,
    },
    flexWrap: {
      true: "wrap",
    },
    gap: vars.spacing,
    rowGap: vars.spacing,
    columnGap: vars.spacing,
  },
});
