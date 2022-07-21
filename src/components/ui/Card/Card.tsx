import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';
import { configs } from '../../system/configs/index.css';
import { SystemProps } from '../../system/configs/type';
import { Typography } from '../Typography/Typography';
import { card, cardContent, cardFooter, cardMedia, cardTitle } from './card.css';

type CardProps = {
  className?: string;
  color?: 'inherit' | 'paper';
  outlined?: false;
  elevation?: 0 | 1 | 2 | 3;
  media?: string;
  href?: string;
  title?: string;
  footer?: React.ReactNode;
} & { sx?: Partial<SystemProps> } & Omit<JSX.IntrinsicElements['div'], 'color'>;

const cardClasses = {
  root: 'Vanilla-Card-root',
  media: 'Vanilla-Card-media',
  content: 'Vanilla-Card-content',
  footer: 'Vanilla-Card-footer',
};

const LinkWrapper: React.FC<{ href?: string; children: React.ReactElement }> = ({
  href,
  children,
}) => {
  if (href) {
    return (
      <Link href={href} style={{ cursor: 'pointer' }}>
        {children}
      </Link>
    );
  }

  return children;
};

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    className,
    sx,
    color = 'inherit',
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
          className,
        )}
        {...rest}
      >
        {media && (
          <div className={clsx(cardClasses.media, cardMedia())}>
            <Image
              src={media}
              layout="fill"
              objectFit="contain"
              alt="logo"
              style={{
                ...(href && { cursor: 'pointer' }),
              }}
            />
          </div>
        )}
        <div className={clsx(cardClasses.content, cardContent())}>
          {title && (
            <Typography variant="h5" clickable={Boolean(href)} className={cardTitle()}>
              {title}
            </Typography>
          )}
          {footer && <div className={clsx(cardClasses.footer, cardFooter())}>{footer}</div>}
        </div>
      </div>
    </LinkWrapper>
  );
});
