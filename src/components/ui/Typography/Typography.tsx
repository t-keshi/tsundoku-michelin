import clsx from "clsx";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { blockquote, figure, typography } from "./typography.css";

type TypogrqphyProps = {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "overline"
    | "blockquote";
  noWrap?: true;
  gutterBottom?: true;
  paragraph?: true;
  clickable?: boolean;
  display?: "inline" | "block";
  responsive?: boolean;
  color?: "primary" | "secondary";
} & { sx?: Partial<SystemProps> } & JSX.IntrinsicElements["p"];

const typogrqphyClasses = {
  root: "Vanilla-Typogrqphy-root",
};

export const Typography = forwardRef<
  HTMLParagraphElement | HTMLHeadingElement,
  TypogrqphyProps
>((props, ref) => {
  const {
    className,
    sx,
    children,
    variant = "body1",
    noWrap,
    gutterBottom,
    paragraph,
    clickable = false,
    display: displayProps,
    responsive = false,
    color = "primary",
    ...rest
  } = props;

  const defaultDisplay = variant[0] === "h" ? "block" : "inline";
  const display = displayProps ? displayProps : defaultDisplay;

  if (variant === "blockquote") {
    return (
      <figure
        ref={ref}
        className={clsx(
          typogrqphyClasses.root,
          sx && configs(sx as object),
          figure()
        )}
        {...rest}
      >
        <blockquote className={blockquote()}>{children}</blockquote>
      </figure>
    );
  }

  const _props = {
    ref,
    className: clsx(
      typogrqphyClasses.root,
      sx && configs(sx as object),
      typography({
        variant,
        noWrap,
        gutterBottom,
        paragraph,
        clickable,
        display,
        responsive,
        color,
      }),
      className
    ),
    ...rest,
  };

  if (variant === "h1") {
    return <h1 {..._props}>{children}</h1>;
  }
  if (variant === "h2") {
    return <h2 {..._props}>{children}</h2>;
  }
  if (variant === "h3") {
    return <h3 {..._props}>{children}</h3>;
  }
  if (variant === "h4") {
    return <h4 {..._props}>{children}</h4>;
  }
  if (variant === "h5") {
    return <h5 {..._props}>{children}</h5>;
  }
  if (variant === "h6") {
    return <h6 {..._props}>{children}</h6>;
  }

  return <p {..._props}>{children}</p>;
});
