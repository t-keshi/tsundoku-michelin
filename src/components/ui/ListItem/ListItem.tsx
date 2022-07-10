import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { listItem, listItemContainer } from "./listItem.css";

type ListItemProps = {
  children?: React.ReactNode;
  className?: string;
  hasDivider?: boolean;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["li"], "ref">;

const listItemClasses = {
  root: "Vanilla-ListItem-root",
};

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (props, ref) => {
    const { className, sx, children, hasDivider, ...rest } = props;

    return (
      <li
        ref={ref}
        className={clsx(
          listItemClasses.root,
          sx && configs(sx as object),
          listItemContainer(),
          className
        )}
        {...rest}
      >
        <div className={clsx(listItem({ hasDivider }))}>{children}</div>
      </li>
    );
  }
);
