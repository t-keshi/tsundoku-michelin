import clsx from "clsx";
import * as React from "react";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { textField } from "./textField.css";

type TextFieldProps = {
  className?: string;
  variant?: "standard" | "outlined";
  size?: "sm" | "md";
  rounded?: true;
} & { sx?: Partial<SystemProps> } & Omit<
    JSX.IntrinsicElements["input"],
    "size" | "ref"
  >;

const typogrqphyClasses = {
  root: "Vanilla-TextField-root",
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      sx,
      variant = "standard",
      size = "md",
      rounded = false,
      ...rest
    } = props;

    return (
      <input
        ref={ref}
        className={clsx(
          typogrqphyClasses.root,
          sx && configs(sx as object),
          textField({ variant, size, rounded }),
          className
        )}
        {...rest}
      />
    );
  }
);
