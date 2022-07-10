import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "../theme/index.css";
import { breakpoints } from "./breakpoints.css";

export const position = defineProperties({
  ...breakpoints,
  properties: {
    position: ["fixed", "absolute", "relative"],
    top: vars.spacing,
    right: vars.spacing,
    bottom: vars.spacing,
    left: vars.spacing,
  },
});
