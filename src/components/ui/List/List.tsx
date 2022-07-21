import clsx from 'clsx';
import { forwardRef } from 'react';
import { configs } from '../../system/configs/index.css';
import { SystemProps } from '../../system/configs/type';
import { list } from './list.css';

type ListProps = {
  as?: 'ol' | 'ul';
  children?: React.ReactNode;
  className?: string;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements['ul'], 'ref'> &
  Omit<JSX.IntrinsicElements['ol'], 'ref'>;

const listClasses = {
  root: 'Vanilla-List-root',
};

export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>((props, ref) => {
  const { as = 'ul', className, sx, ...rest } = props;

  if (as === 'ul') {
    <ul
      ref={ref}
      className={clsx(listClasses.root, sx && configs(sx as object), list(), className)}
      {...rest}
    />;
  }

  return (
    <ol
      ref={ref as React.ForwardedRef<HTMLOListElement>}
      className={clsx(listClasses.root, sx && configs(sx as object), list(), className)}
      {...rest}
    />
  );
});
