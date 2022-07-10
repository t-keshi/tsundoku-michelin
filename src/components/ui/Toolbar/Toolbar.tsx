import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { toolbar } from "./toolbar.css";

type ToolbarProps = {
  children?: React.ReactNode;
  className?: string;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

const toolbarClasses = {
  root: "Vanilla-Toolbar-root",
};

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  (props, ref) => {
    const { className, sx, ...rest } = props;

    return (
      <div
        ref={ref}
        className={clsx(
          toolbarClasses.root,
          sx && configs(sx as object),
          toolbar(),
          className
        )}
        {...rest}
      />
    );
  }
);
