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
  className?: string;
  color?: "inherit" | "paper";
  outlined?: false;
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  media?: string;
  href?: string;
  title?: string;
  footer?: React.ReactNode;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements["div"], "color">;

const cardClasses = {
  root: "Vanilla-Card-root",
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    className,
    sx,
    color = "inherit",
    outlined = true,
    elevation,
    media,
    href,
    title,
    footer,
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
              style={{
                ...(href && { cursor: "pointer" }),
              }}
            />
          </Box>
        )}
        <Box
          sx={{
            ...(href && { cursor: "pointer" }),
            px: 2,
            py: 1,
            mt: 1,
          }}
        >
          {title && (
            <Box
              sx={{
                mb: 1,
              }}
            >
              <Typography variant="h5" clickable={Boolean(href)}>
                {title}
              </Typography>
            </Box>
          )}
          {footer && footer}
        </Box>
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
