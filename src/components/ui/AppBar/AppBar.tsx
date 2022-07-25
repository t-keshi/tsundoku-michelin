import clsx from 'clsx';
import { forwardRef } from 'react';
import { configs } from '../../system/configs/index.css';
import { SystemProps } from '../../system/configs/type';
import { appBar } from './appBar.css';

type AppBarProps = {
  children?: React.ReactNode;
  className?: string;
  color?: 'default' | 'white';
  outlined?: true;
  shadow?: 0 | 1 | 2 | 3 | 'neumorphism';
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements['div'];

const appBarClasses = {
  root: 'Vanilla-AppBar-root',
};

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>((props, ref) => {
  const { className, sx, color = 'white', outlined, shadow = 0, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        appBarClasses.root,
        sx && configs(sx as object),
        appBar({ color, outlined, shadow }),
        className,
      )}
      {...rest}
    />
  );
});
