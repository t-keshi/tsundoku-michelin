import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { grid } from "./grid.css";

type GridProps = {
  children?: React.ReactNode;
  className?: string;
  inline?: true;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const gridClasses = {
  root: "Vanilla-Grid-root",
};

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { className, sx, inline, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        gridClasses.root,
        sx && configs(sx as object),
        grid({ inline }),
        className
      )}
      {...rest}
    />
  );
});
