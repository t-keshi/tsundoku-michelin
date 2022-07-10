import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { Typography } from "../Typography/Typography";
import { listItemText } from "./listItemText.css";

type ListItemTextProps = {
  children?: React.ReactNode;
  className?: string;
  hasDivider?: boolean;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "ref">;

const listItemTextClasses = {
  root: "Vanilla-ListItemText-root",
};

export const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  (props, ref) => {
    const { className, sx, children, hasDivider, ...rest } = props;

    return (
      <div
        ref={ref}
        className={clsx(
          listItemTextClasses.root,
          sx && configs(sx as object),
          listItemText(),
          className
        )}
        {...rest}
      >
        <Typography variant={"body1"} display="block">
          {children}
        </Typography>
      </div>
    );
  }
);
