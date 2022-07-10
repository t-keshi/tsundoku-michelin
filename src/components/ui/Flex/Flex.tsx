import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { flex } from "./flex.css";

type FlexProps = {
  children?: React.ReactNode;
  className?: string;
  inline?: true;
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["div"];

const flexClasses = {
  root: "Vanilla-Flex-root",
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { className, sx, inline, ...rest } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        flexClasses.root,
        sx && configs(sx as object),
        flex({ inline }),
        className
      )}
      {...rest}
    />
  );
});
