import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { button, buttonEndIcon, buttonStartIcon } from "./button.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "contained" | "outlined" | "text" | "disabled";
  color?: "inherit" | "primary" | "secondary";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["button"];

const buttonClasses = {
  root: "Vanilla-Button-root",
  startIcon: "Vanilla-Button-startIcon",
  endIcon: "Vanilla-Button-endIcon",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      sx,
      children,
      variant = "contained",
      color = "primary",
      startIcon,
      endIcon,
      type = "button",
      ...rest
    } = props;

    const renderStartIcon = startIcon && (
      <span className={clsx(buttonClasses.startIcon, buttonStartIcon())}>
        {startIcon}
      </span>
    );
    const renderEndIcon = endIcon && (
      <span className={clsx(buttonClasses.endIcon, buttonEndIcon())}>
        {endIcon}
      </span>
    );

    return (
      <button
        ref={ref}
        className={clsx(
          buttonClasses.root,
          button({ variant, color }),
          sx && configs(sx as object),
          className
        )}
        type={type}
        {...rest}
      >
        {renderStartIcon}
        {children}
        {renderEndIcon}
      </button>
    );
  }
);
