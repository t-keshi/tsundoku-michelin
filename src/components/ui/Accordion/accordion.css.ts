import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";
import { createTransition } from "../../system/utils/transition";

export const accordion = recipe({
  base: {
    transition: createTransition(["margin"], { duration: "shortest" }),
    overflowAnchor: "none",
  },
});
