import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { box } from "./box.css";

type BoxProps = {
  children?: React.ReactNode;
  className?: string;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

const boxClasses = {
  root: "Vanilla-Box-root",
};

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { className, sx, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        boxClasses.root,
        !sx?.display && box(),
        sx && configs(sx as object),
        className
      )}
      {...rest}
    />
  );
});
