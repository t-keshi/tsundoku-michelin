import clsx from "clsx";
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { stack, stackMargin } from "./stack.css";

const getValidChildren = (children: React.ReactNode) =>
  Children.toArray(children).filter((child) =>
    isValidElement(child)
  ) as React.ReactElement[];

type StackProps = {
  children?: React.ReactNode;
  className?: string;
  horizontal?: boolean;
  spacing?: 1 | 2 | 3 | 4 | 5;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const stackClasses = {
  root: "Vanilla-Stack-root",
};

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    className,
    sx,
    children,
    horizontal = false,
    spacing = 4,
    ...rest
  } = props;

  const validChildren = getValidChildren(children);
  const clones = validChildren.map((child, index) => {
    const key = child.key !== undefined ? child.key : index;
    const isLast = index + 1 === validChildren.length;
    const clonedDivider = cloneElement(<div />, {
      className: stackMargin({ horizontal, spacing }),
    });
    const renderDivider = isLast ? null : clonedDivider;

    return (
      <React.Fragment key={key}>
        {child}
        {renderDivider}
      </React.Fragment>
    );
  });

  return (
    <div
      ref={ref}
      className={clsx(
        stackClasses.root,
        sx && configs(sx as object),
        stack({ horizontal }),
        className
      )}
      {...rest}
    >
      {clones}
    </div>
  );
});
