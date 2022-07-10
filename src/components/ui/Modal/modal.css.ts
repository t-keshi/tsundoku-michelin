import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../system/theme/index.css";

export const modal = recipe({
  base: {
    position: "fixed",
    zIndex: vars.zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  },
  variants: {
    isOpen: {
      false: {
        visibility: "hidden",
      },
    },
  },
});

export const modalBackdrop = recipe({
  base: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    WebkitTapHighlightColor: "transparent",
    zIndex: -100,
  },
  variants: {
    invisible: {
      true: {
        backgroundColor: "transparent",
      },
      false: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
});
