import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { paper } from "./paper.css";

type PaperProps = {
  children?: React.ReactNode;
  className?: string;
  inline?: true;
  outlined?: true;
  elevation?: 0 | 1 | 2 | 3;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

export const paperClasses = {
  root: "Vanilla-Paper-root",
};

export const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  const { className, sx, outlined, elevation, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        paperClasses.root,
        sx && configs(sx as object),
        paper({ outlined, elevation }),
        className
      )}
      {...rest}
    />
  );
});
