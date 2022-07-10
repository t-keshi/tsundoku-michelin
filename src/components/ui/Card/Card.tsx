import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { configs } from "../../system/configs/index.css";
import { SystemProps } from "../../system/configs/type";
import { Box } from "../Box/Box";
import { Typography } from "../Typography/Typography";
import { card } from "./card.css";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  color?: "inherit" | "paper";
  outlined?: false;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  media?: string;
  href?: string;
  title?: string;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "color">;

const cardClasses = {
  root: "Vanilla-Card-root",
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    className,
    sx,
    children = null,
    color = "inherit",
    outlined = true,
    elevation,
    media,
    href,
    title,
    ...rest
  } = props;

  return (
    <LinkWrapper href={href}>
      <div
        ref={ref}
        className={clsx(
          cardClasses.root,
          sx && configs(sx as object),
          card({ color, outlined, elevation }),
          className
        )}
        {...rest}
      >
        {media && (
          <Box sx={{ height: 200, width: "100%", position: "relative" }}>
            <Image
              src={media}
              layout="fill"
              objectFit="contain"
              alt="logo"
              style={href ? { cursor: "pointer" } : {}}
            />
          </Box>
        )}
        {title && (
          <Box sx={href ? { p: 2, cursor: "pointer" } : { p: 2 }}>
            <Typography variant="h5" clickable={Boolean(href)}>
              {title}
            </Typography>
          </Box>
        )}
        {children}
      </div>
    </LinkWrapper>
  );
});

const LinkWrapper: React.FC<{ href?: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  if (href) {
    return (
      <Link href={href} style={{ cursor: "pointer" }}>
        {children}
      </Link>
    );
  }

  return <>{children}</>;
};
