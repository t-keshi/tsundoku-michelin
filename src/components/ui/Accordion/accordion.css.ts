import { recipe } from '@vanilla-extract/recipes';
import { createTransition } from '../../system/utils/transition';

export const accordion = recipe({
  base: {
    transition: createTransition(['margin'], { duration: 'shortest' }),
    overflowAnchor: 'none',
  },
});
