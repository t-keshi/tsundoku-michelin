import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { sdk, sdkHooks } from '../services/sdk';
import { fetchUserOnboard } from '../services/query/fetchUserOnboard';
import { useMutation } from '../../helpers/hooks/useMutation';

export const useOnboard = (uid: string) => {
  const router = useRouter();
  const { data, error } = sdkHooks.useFetchUserOnboard(
    [fetchUserOnboard, uid],
    {
      userId: uid,
    },
    { suspense: true },
  );

  const { mutate: resetUsername } = useMutation(() => sdk.ResetUsername());

  const { mutate: registerUser } = useMutation(
    async ({ userId, name, image }: { userId: string; name: string; image?: File }) => {
      if (!image) {
        return sdk.OnboardUser({ userId, name });
      }

      const formData = new FormData();
      formData.append('image', image);
      const _res = await fetch('/api/image', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const imgRes: { image: string } = await _res.json();
      const imageUrl = imgRes.image;

      const res = await sdk.OnboardUser({ userId, name, image: imageUrl });

      return res;
    },
    {
      onSuccess: () => router.push('/'),
    },
  );

  const shouldOnboard = data && data.user && data.user.onboarding === null;
  const alreadOnboared = data && data.user && data.user.onboarding === 'DONE';

  useEffect(() => {
    // FIXME: 名前の更新->削除->更新が非常に冗長なので、最初の更新をしないようにする
    if (uid && shouldOnboard) {
      resetUsername();
    }

    if (alreadOnboared) {
      router.push('/');
    }
  }, [uid, shouldOnboard, resetUsername, router, alreadOnboared]);

  return {
    data,
    isLoading: !error && !data,
    onRegister: registerUser,
  };
};
