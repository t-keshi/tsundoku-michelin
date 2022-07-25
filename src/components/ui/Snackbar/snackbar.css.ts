import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../system/theme/index.css';
import { mq } from '../../system/utils/mediaQuery';

export const snackbarButton = recipe({
  base: {
    cursor: 'pointer',
  },
});

export const snackbar = recipe({
  base: {
    zIndex: vars.zIndex.snackbar,
    position: 'fixed',
    display: 'flex',
    bottom: 8,
    left: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    '@media': {
      [mq('tablet')]: {
        bottom: 24,
        left: 24,
      },
    },
  },
  variants: {
    inline: {
      true: {
        display: 'inline-grid',
      },
    },
  },
});

export const snackbarContent = recipe({
  base: {
    ...vars.typography.body2,
    color: vars.palette.lightMode.text.primary,
    backgroundColor: vars.palette.lightMode.background.paper,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '14px 16px',
    borderRadius: vars.radius,
    flexGrow: 1,
    '@media': {
      [mq('tablet')]: {
        flexGrow: 'initial',
        minWidth: 288,
      },
    },
    boxShadow: vars.shadow[1],
  },
});

export const snackbarIcon = recipe({
  base: {
    marginRight: 12,
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  },
  variants: {
    status: {
      success: {
        color: vars.palette.success.main,
      },
      error: {
        color: vars.palette.error.main,
      },
    },
  },
});
