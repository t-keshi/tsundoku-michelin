import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../system/theme/index.css';

export const iconButtonGroup = recipe({
  base: {
    display: 'block',
    width: 'fit-content',
    borderRadius: 9999,
    padding: vars.spacing[1],
    border: vars.palette.lightMode.divider,
    backgroundColor: vars.palette.lightMode.background.paper,
  },
});
