import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { list } from "./list.css";

type ListProps = {
  children?: React.ReactNode;
  className?: string;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["ul"], "ref">;

const listClasses = {
  root: "Vanilla-List-root",
};

export const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  const { className, sx, ...rest } = props;

  return (
    <ul
      ref={ref}
      className={clsx(
        listClasses.root,
        sx && configs(sx as object),
        list(),
        className
      )}
      {...rest}
    />
  );
});
