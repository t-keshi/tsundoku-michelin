import { breakpointsVars } from "../theme/breakpoints.css";

export const breakpoints = {
  conditions: {
    mobile: {},
    tablet: {
      "@media": `screen and (min-width: ${breakpointsVars.breakpoints.tablet})`,
    },
    desktop: {
      "@media": `screen and (min-width: ${breakpointsVars.breakpoints.desktop})`,
    },
  },
  defaultCondition: "mobile",
};
