import { defineProperties } from "@vanilla-extract/sprinkles";
import { breakpoints } from "./breakpoints.css";

export const layout = defineProperties({
  ...breakpoints,
  properties: {
    display: ["none", "flex", "inine-flex", "block", "inline-block", "inline"],
    width: [100, 200, 300, 400, 500, "100%", "auto", "100vw"],
    maxWidth: [100, 200, 300, 400, 500, "100%", "auto", "100vw"],
    minWidth: [100, 200, 300, 400, 500, "100%", "auto", "100vw"],
    height: [100, 200, 300, 400, 500, "100%", "auto", "100vh"],
    maxHeight: [100, 200, 300, 400, 500, "100%", "auto", "100vh"],
    minHeight: [100, 200, 300, 400, 500, "100%", "auto", "100vh"],
  },
});
