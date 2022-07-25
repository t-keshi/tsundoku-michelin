import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../system/theme/index.css';
import { createTransition } from '../../system/utils/transition';

export const popoverPaper = recipe({
  base: {
    backgroundColor: vars.palette.lightMode.background.paper,
    color: vars.palette.lightMode.text.primary,
    transition: createTransition(['box-shadow']),
    borderRadius: vars.radius,
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  },
  variants: {
    outlined: {
      true: {
        border: `1px solid ${vars.palette.lightMode.divider}`,
      },
    },
    square: {
      true: {
        borderRadius: 0,
      },
    },
    variants: {
      outlined: {
        border: `1px solid ${vars.palette.lightMode.divider}`,
      },
    },
    elevation: {
      0: {
        boxShadow: vars.shadow[0],
      },
      1: {
        boxShadow: vars.shadow[1],
      },
      2: {
        boxShadow: vars.shadow[2],
      },
      3: {
        boxShadow: vars.shadow[3],
      },
    },
  },
});
