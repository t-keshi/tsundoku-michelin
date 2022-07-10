import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { form } from "./form.css";

type FormProps = {
  children?: React.ReactNode;
  className?: string;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["form"];

const formClasses = {
  root: "Vanilla-Form-root",
};

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { className, sx, ...rest } = props;

  return (
    <form
      ref={ref}
      className={clsx(
        formClasses.root,
        !sx?.display && form(),
        sx && configs(sx as object),
        className
      )}
      {...rest}
    />
  );
});
