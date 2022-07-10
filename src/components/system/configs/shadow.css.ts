import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "../theme/index.css";
import { breakpoints } from "./breakpoints.css";

export const shadow = defineProperties({
  ...breakpoints,
  properties: {
    boxShadow: vars.shadow,
  },
});
