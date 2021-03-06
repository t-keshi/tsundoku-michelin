import { datadogLogs } from '@datadog/browser-logs';
import { useMutation } from '../../helpers/hooks/useMutation';
import { fetchProfile } from '../services/query/fetchProfile';
import { sdk } from '../services/sdk';

export const useProfile = (uid: string) => {
  const { data, error } = sdk.useFetchProfile(
    [fetchProfile, uid],
    { userId: uid },
    { suspense: true, revalidateOnMount: false },
  );

  const { mutate: updateUserImage } = useMutation(
    async ({ image, name }: { image: File; name: string }) => {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('name', name);
      const _res = await fetch('/api/image', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
        .then((res) => res.json())
        .catch((err) => datadogLogs.logger.log(err.message));
      const imgRes: { image: string } = _res;
      const imageUrl = imgRes.image;

      return sdk.UpdateUserImage({ image: imageUrl });
    },
  );

  const { mutate: updateUserInfo } = useMutation(
    async ({ name, profile }: { name: string; profile?: string }) =>
      sdk.UpdateUserInfo({ ...(name && { name }), ...(profile && { profile }) }),
  );

  return {
    data,
    isLoading: !error && !data,
    onUpdateUserImage: updateUserImage,
    onUpdateUserInfo: updateUserInfo,
  };
};
