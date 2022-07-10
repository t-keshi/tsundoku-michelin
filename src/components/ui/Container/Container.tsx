import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { container } from "./container.css";

type ContainerProps = {
  children?: React.ReactNode;
  as?: "div" | "main";
  className?: string;
  maxWidth?: "mobile" | "tablet" | "desktop";
  inline?: true;
  disablePadding?: boolean;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const containerClasses = {
  root: "Vanilla-Container-root",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    const {
      className,
      sx,
      as,
      maxWidth = "tablet",
      inline,
      disablePadding = false,
      ...rest
    } = props;

    if (as === "main") {
      <main
        ref={ref}
        className={clsx(
          containerClasses.root,
          sx && configs(sx as object),
          container({ maxWidth, inline, disablePadding }),
          className
        )}
        {...rest}
      />;
    }

    return (
      <div
        ref={ref}
        className={clsx(
          containerClasses.root,
          sx && configs(sx as object),
          container({ maxWidth, inline, disablePadding }),
          className
        )}
        {...rest}
      />
    );
  }
);
