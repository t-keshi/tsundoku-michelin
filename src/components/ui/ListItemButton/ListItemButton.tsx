import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { listItemButton } from "./listItemButton.css";

type ListItemIconProps = {
  children?: React.ReactNode;
  className?: string;
  hasDivider?: boolean;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

const listItemClasses = {
  root: "Vanilla-ListItemIcon-root",
};

export const ListItemButton = forwardRef<HTMLDivElement, ListItemIconProps>(
  (props, ref) => {
    const { className, sx, children, hasDivider, ...rest } = props;

    return (
      <div
        ref={ref}
        className={clsx(
          listItemClasses.root,
          sx && configs(sx as object),
          listItemButton({ hasDivider }),
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
