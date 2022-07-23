import { useSession } from 'next-auth/react';
import { cloneElement } from 'react';
import { useAuthModal } from '../../containers/contexts/authModal';

export const ButtonWithAuth: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { onOpen } = useAuthModal();
  const { status } = useSession();

  if (status === 'loading' || status === 'authenticated') {
    return children;
  }

  return cloneElement(children, {
    onClick: onOpen,
  });
};
