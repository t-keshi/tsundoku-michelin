import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const useProtectedRoute = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'loading' || !router.isReady) {
    return null;
  }

  if (status === 'unauthenticated') {
    router.push('/');
  }

  if (session && !session.user.name) {
    router.push('/auth/onboard');
  }

  return session;
};
