import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { iconButton } from "./iconButton.css";

type IconButtonProps = {
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  transparent?: boolean;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["button"];

const iconButtonClasses = {
  root: "Vanilla-IconButton-root",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      className,
      sx,
      active = false,
      size = "md",
      disabled = false,
      transparent = false,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        className={clsx(
          iconButtonClasses.root,
          sx && configs(sx as object),
          iconButton({ active, size, disabled, transparent }),
          className
        )}
        {...rest}
      />
    );
  }
);
