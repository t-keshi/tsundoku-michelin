import { breakpointsVars } from "../theme/breakpoints.css";

export const mq = (key: keyof typeof breakpointsVars.breakpoints) =>
  `(min-width: ${breakpointsVars.breakpoints[key]})`;
