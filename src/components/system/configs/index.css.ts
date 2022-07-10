import { createSprinkles } from "@vanilla-extract/sprinkles";
import { border } from "./border.css";
import { color } from "./color.css";
import { flex } from "./flex.css";
import { grid } from "./grid.css";
import { layout } from "./layout.css";
import { position } from "./position.css";
import { shadow } from "./shadow.css";
import { spacing } from "./spacing.css";

export const configs = createSprinkles(
  flex,
  layout,
  spacing,
  grid,
  color,
  position,
  border,
  shadow
);
