import clsx from "clsx";
import * as React from "react";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { textField, textFieldErrorMessage } from "./textField.css";

type TextFieldProps = {
  className?: string;
  variant?: "standard" | "outlined";
  size?: "sm" | "md";
  rounded?: true;
  errorMessage?: string;
} & { sx?: Partial<SystemProps> } & Omit<
    JSX.IntrinsicElements["input"],
    "size" | "ref"
  >;

const typogrqphyClasses = {
  root: "Vanilla-TextField-root",
  errorMessage: "Vanilla-TextField-errorMessage",
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      sx,
      variant = "standard",
      size = "md",
      rounded = false,
      errorMessage,
      ...rest
    } = props;

    return (
      <div>
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
        {errorMessage && (
          <p
            className={clsx(
              typogrqphyClasses.errorMessage,
              textFieldErrorMessage()
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
