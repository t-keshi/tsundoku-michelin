import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../system/theme/index.css';
import { createTransition } from '../../system/utils/transition';

export const iconButton = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: '1px solid red',
    overflow: 'visible',
    transition: createTransition(['background-color'], {
      duration: 'shortest',
    }),
    cursor: 'pointer',
    lineHeight: 1,
    color: vars.palette.lightMode.action.active,
    backgroundColor: vars.palette.lightMode.background.paper,
    selectors: {
      '&:hover': {
        backgroundColor: vars.palette.lightMode.action.hover,
      },
    },
  },
  variants: {
    transparent: {
      true: {
        backgroundColor: 'inherit',
        selectors: {
          '&:hover': {
            backgroundColor: 'inherit',
          },
        },
      },
    },
    active: {
      true: {
        backgroundColor: vars.palette.primary.main,
        color: vars.palette.primary.contrastText,
        cursor: 'auto',
        selectors: {
          '&:hover': {
            backgroundColor: vars.palette.primary.main,
          },
        },
      },
    },
    size: {
      sm: {
        padding: 5,
        fontSize: 18,
        width: 40,
        height: 40,
      },
      md: {
        padding: 8,
        fontSize: 28,
        width: 48,
        height: 48,
      },
      lg: {
        padding: 12,
        fontSize: 28,
        width: 56,
        height: 56,
      },
    },
    disabled: {
      true: {
        backgroundColor: 'transparent',
        color: vars.palette.lightMode.action.disabled,
      },
    },
  },
});
