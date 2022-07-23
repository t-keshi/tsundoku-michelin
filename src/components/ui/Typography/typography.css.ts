import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../system/theme/index.css';
import { mq } from '../../system/utils/mediaQuery';

export const typography = recipe({
  base: {
    display: 'inline',
  },
  variants: {
    variant: vars.typography,
    noWrap: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    remark: {
      true: {
        wordBreak: 'break-all',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
      },
    },
    gutterBottom: {
      true: {
        marginBottom: '8px',
      },
    },
    paragraph: {
      true: {
        marginBottom: '16px',
      },
    },
    clickable: {
      true: {
        cursor: 'pointer',
        selectors: {
          '&:hover': {
            textDecoration: 'underline',
            textUnderlineOffset: 4,
          },
        },
      },
    },
    underline: {
      true: {
        borderBottom: `1px solid ${vars.palette.lightMode.divider}`,
      },
    },
    display: {
      block: {
        display: 'block',
      },
      inline: {
        display: 'inline',
      },
    },
    responsive: {
      true: {},
      false: {},
    },
    color: {
      primary: {
        color: vars.palette.lightMode.text.primary,
      },
      secondary: {
        color: vars.palette.lightMode.text.secondary,
      },
      error: {
        color: vars.palette.error.main,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: 'h1',
        responsive: true,
      },
      style: {
        ...vars.typography.h2,
        '@media': {
          [mq('tablet')]: {
            ...vars.typography.h1,
          },
        },
      },
    },
    {
      variants: {
        variant: 'h2',
        responsive: true,
      },
      style: {
        ...vars.typography.h3,
        '@media': {
          [mq('tablet')]: {
            ...vars.typography.h2,
          },
        },
      },
    },
    {
      variants: {
        variant: 'h3',
        responsive: true,
      },
      style: {
        ...vars.typography.h4,
        '@media': {
          [mq('tablet')]: {
            ...vars.typography.h3,
          },
        },
      },
    },
    {
      variants: {
        variant: 'h4',
        responsive: true,
      },
      style: {
        ...vars.typography.h5,
        '@media': {
          [mq('tablet')]: {
            ...vars.typography.h4,
          },
        },
      },
    },
    {
      variants: {
        variant: 'h5',
        responsive: true,
      },
      style: {
        ...vars.typography.h6,
        '@media': {
          [mq('tablet')]: {
            ...vars.typography.h5,
          },
        },
      },
    },
  ],
});

export const figure = recipe({
  base: {
    display: 'block',
    borderLeft: `3px solid ${vars.palette.lightMode.text.secondary}`,
    marginTop: vars.spacing[4],
    marginBottom: vars.spacing[4],
    paddingTop: vars.spacing[2],
    paddingBottom: vars.spacing[2],
    paddingLeft: vars.spacing[2],
    paddingRight: vars.spacing[2],
    '@media': {
      [mq('tablet')]: {
        paddingLeft: vars.spacing[4],
        paddingRight: vars.spacing[4],
      },
    },
    color: vars.palette.lightMode.text.secondary,
  },
});

export const blockquote = recipe({
  base: {
    ...vars.typography.body1,
  },
  variants: {
    remark: {
      true: {
        wordBreak: 'break-all',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
      },
    },
  },
});
