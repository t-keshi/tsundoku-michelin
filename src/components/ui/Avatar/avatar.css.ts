import { recipe } from '@vanilla-extract/recipes';

export const avatar = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: 20,
    lineHeight: 1,
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none',
  },
  variants: {
    size: {
      sm: {
        width: 40,
        height: 40,
      },
      md: {
        width: 48,
        height: 48,
      },
      lg: {
        width: 120,
        height: 120,
      },
    },
  },
});

export const avatarImg = recipe({
  base: {
    objectFit: 'contain',
    height: 'auto',
    width: '100%',
  },
});
