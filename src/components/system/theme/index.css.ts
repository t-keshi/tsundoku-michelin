import { createGlobalTheme } from "@vanilla-extract/css";
import { breakpointsVars } from "./breakpoints.css";
import { paletteVars } from "./palette.css";
import { radiusVars } from "./radius.css";
import { shadowVars } from "./shadows.css";
import { spaceVars } from "./spacing.css";
import { typographyVars } from "./typography.css";
import { zIndexVars } from "./zIndex.css";

export const vars = createGlobalTheme(":root", {
  ...paletteVars,
  ...breakpointsVars,
  ...spaceVars,
  ...typographyVars,
  ...shadowVars,
  ...radiusVars,
  ...zIndexVars,
});
