import { defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from '../theme/index.css';
import { breakpoints } from './breakpoints.css';

export const color = defineProperties({
  ...breakpoints,
  properties: {
    color: {
      'primary-light': vars.palette.primary.light,
      'primary-main': vars.palette.primary.main,
      'primary-dark': vars.palette.primary.dark,
      'primary-contrastText': vars.palette.secondary.contrastText,
      'secondary-light': vars.palette.secondary.light,
      'secondary-main': vars.palette.secondary.main,
      'secondary-dark': vars.palette.secondary.dark,
      'secondary-contrastText': vars.palette.secondary.contrastText,
      'text-primary': vars.palette.lightMode.text.primary,
      'text-secondary': vars.palette.lightMode.text.secondary,
    },
    backgroundColor: {
      'primary-light': vars.palette.primary.light,
      'primary-main': vars.palette.primary.main,
      'primary-dark': vars.palette.primary.dark,
      'primary-contrastText': vars.palette.secondary.contrastText,
      'secondary-light': vars.palette.secondary.light,
      'secondary-main': vars.palette.secondary.main,
      'secondary-dark': vars.palette.secondary.dark,
      'secondary-contrastText': vars.palette.secondary.contrastText,
      'text-primary': vars.palette.lightMode.text.primary,
      'text-secondary': vars.palette.lightMode.text.secondary,
      default: vars.palette.lightMode.background.default,
    },
  },
  shorthands: {
    bgColor: ['backgroundColor'],
  },
});
