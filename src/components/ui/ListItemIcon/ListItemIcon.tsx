import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { listItemIcon } from "./listItemIcon.css";

type ListItemIconProps = {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

const listItemClasses = {
  root: "Vanilla-ListItemIcon-root",
};

export const ListItemIcon = forwardRef<HTMLDivElement, ListItemIconProps>(
  (props, ref) => {
    const { className, sx, children, size = "md", ...rest } = props;

    return (
      <div
        ref={ref}
        className={clsx(
          listItemClasses.root,
          sx && configs(sx as object),
          listItemIcon({ size }),
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
