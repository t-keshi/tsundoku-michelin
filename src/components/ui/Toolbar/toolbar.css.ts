import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";
import { mq } from "../../system/utils/mediaQuery";

export const toolbar = recipe({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: 64,
    "@media": {
      [mq("mobile")]: {
        height: 48,
        paddingLeft: vars.spacing[3],
        paddingRight: vars.spacing[3],
      },
      [mq("tablet")]: {
        height: 56,
        paddingLeft: vars.spacing[2],
        paddingRight: vars.spacing[2],
      },
    },
  },
});
