import { useSession } from 'next-auth/react';
import Link, { LinkProps } from 'next/link';
import { cloneElement, forwardRef } from 'react';
import { useAuthModal } from '../../containers/contexts/authModal';

type LinkWithAuthProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps & {
    children: React.ReactElement;
  } & React.RefAttributes<HTMLAnchorElement>;

export const LinkWithAuth = forwardRef<HTMLAnchorElement, LinkWithAuthProps>((props, ref) => {
  const { children, ...rest } = props;
  const { onOpen } = useAuthModal();
  const { status } = useSession();

  if (status === 'loading') {
    return children;
  }

  if (status === 'authenticated') {
    return (
      <Link ref={ref} {...rest}>
        {children}
      </Link>
    );
  }

  return cloneElement(children, {
    onClick: onOpen,
  });
});
