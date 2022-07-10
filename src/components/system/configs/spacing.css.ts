import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "../theme/index.css";
import { breakpoints } from "./breakpoints.css";

export const spacing = defineProperties({
  ...breakpoints,
  properties: {
    padding: vars.spacing,
    paddingTop: vars.spacing,
    paddingRight: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    margin: vars.spacing,
    marginTop: vars.spacing,
    marginRight: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
  },
  shorthands: {
    p: ["padding"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["margin"],
    mt: ["marginTop"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});
