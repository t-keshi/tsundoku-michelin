import clsx from 'clsx';
import { forwardRef } from 'react';
import { configs } from '../../system/configs/index.css';
import { SystemProps } from '../../system/configs/type';
import { Box } from '../Box/Box';
import { loader, loaderContent, rects } from './loader.css';

type PaperProps = {
  page?: boolean;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements['div'], 'ref'>;

export const loaderClasses = {
  root: 'Vanilla-Loader-root',
  content: 'Vanilla-Loader-content',
};

export const Loader = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  const { className, sx, page = false, ...rest } = props;

  return (
    <Box sx={{ position: 'relative' }}>
      <div
        ref={ref}
        className={clsx(
          loaderClasses.root,
          sx && configs(sx as object),
          loader({ page }),
          className,
        )}
        {...rest}
      >
        <div className={clsx(loaderClasses.content, loaderContent())}>
          <div className={rects({ rect: 1 })} />
          <div className={rects({ rect: 2 })} />
          <div className={rects({ rect: 3 })} />
          <div className={rects({ rect: 4 })} />
          <div className={rects({ rect: 5 })} />
        </div>
      </div>
    </Box>
  );
});
