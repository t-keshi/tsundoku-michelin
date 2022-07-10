import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { iconButtonGroup } from "./iconButtonGroup.css";

type IconButtonProps = {
  children?: React.ReactNode;
  className?: string;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const iconButtonClasses = {
  root: "Vanilla-IconButtonGroup-root",
};

export const IconButtonGroup = forwardRef<HTMLDivElement, IconButtonProps>(
  (props, ref) => {
    const { className, sx, ...rest } = props;

    return (
      <div
        ref={ref}
        className={clsx(
          iconButtonClasses.root,
          sx && configs(sx as object),
          iconButtonGroup(),
          className
        )}
        {...rest}
      />
    );
  }
);
