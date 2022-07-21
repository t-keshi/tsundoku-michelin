import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../system/theme/index.css';

const stretchdelay = keyframes({
  '0%': {
    transform: 'scaleY(0.4)',
    WebkitTransform: 'scaleY(0.4)',
  },
  '20%': {
    transform: 'scaleY(1.0)',
    WebkitTransform: 'scaleY(1.0)',
  },
  '40%': {
    transform: 'scaleY(0.4)',
    WebkitTransform: 'scaleY(0.4)',
  },
  '100%': {
    transform: 'scaleY(0.4)',
    WebkitTransform: 'scaleY(0.4)',
  },
});

export const loader = recipe({
  variants: {
    page: {
      true: {
        position: 'fixed',
        zIndex: 99999,
        top: 0,
        left: 0,
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      },
      false: {},
    },
  },
});

export const loaderContent = recipe({
  base: {
    margin: '100px auto',
    textAlign: 'center',
    fontSize: 10,
    width: 50,
    height: 40,
    display: 'inline-flex',
    columnGap: 8,
  },
});

export const rects = recipe({
  base: {
    backgroundColor: vars.palette.lightMode.text.secondary,
    height: '100%',
    width: 6,
    display: 'inline-block',
    WebkitAnimation: `${stretchdelay} 1.2s infinite ease-in-out`,
    animation: `${stretchdelay} 1.2s infinite ease-in-out`,
  },
  variants: {
    rect: {
      1: {},
      2: {
        WebkitAnimationDelay: '-1.1s',
        animationDelay: '-1.1s',
      },
      3: {
        WebkitAnimationDelay: '-1.0s',
        animationDelay: '-1.0s',
      },
      4: {
        WebkitAnimationDelay: '-0.9s',
        animationDelay: '-0.9s',
      },
      5: {
        WebkitAnimationDelay: '-0.8s',
        animationDelay: '-0.8s',
      },
    },
  },
});
