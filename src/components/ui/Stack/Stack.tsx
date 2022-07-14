import clsx from "clsx";
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { stack, stackDivider } from "./stack.css";

const getValidChildren = (children: React.ReactNode) =>
  Children.toArray(children).filter((child) =>
    isValidElement(child)
  ) as React.ReactElement[];

type StackProps = {
  children?: React.ReactNode;
  className?: string;
  horizontal?: boolean;
  spacing?: 1 | 2 | 3 | 4 | 5;
  hasDivider?: boolean;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const stackClasses = {
  root: "Vanilla-Stack-root",
  divider: "Vanilla-Stack-divider",
};

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    className,
    sx,
    children,
    horizontal = false,
    spacing = 4,
    hasDivider = false,
    ...rest
  } = props;

  const validChildren = getValidChildren(children);
  const clones = !hasDivider
    ? validChildren
    : validChildren.map((child, index) => {
        const key = child.key !== undefined ? child.key : index;
        const isLast = index + 1 === validChildren.length;

        return (
          <React.Fragment key={key}>
            {child}
            {!isLast && (
              <div
                className={clsx(
                  stackClasses.divider,
                  stackDivider({ horizontal, spacing })
                )}
                {...rest}
              />
            )}
          </React.Fragment>
        );
      });

  return (
    <div
      ref={ref}
      className={clsx(
        stackClasses.root,
        sx && configs(sx as object),
        stack({ horizontal, spacing, hasDivider }),
        className
      )}
      {...rest}
    >
      {clones}
    </div>
  );
});
