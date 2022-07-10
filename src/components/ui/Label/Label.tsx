import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { asterisk, label } from "./label.css";

type LabelProps = {
  children?: React.ReactNode;
  className?: string;
  required?: boolean;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["label"];

const labelClasses = {
  root: "Vanilla-Label-root",
  asterisk: "Vanilla-Label-asterisk",
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { className, sx, children, required = false, ...rest } = props;

  return (
    <label
      ref={ref}
      className={clsx(
        labelClasses.root,
        sx && configs(sx as object),
        label(),
        className
      )}
      {...rest}
    >
      {children}
      {required && (
        <span className={clsx(labelClasses.asterisk, asterisk())}>
          &thinsp;{"*"}
        </span>
      )}
    </label>
  );
});
