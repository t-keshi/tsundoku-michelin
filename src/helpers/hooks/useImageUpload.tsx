import { useCallback, useState } from 'react';
import { useSnackbar } from '../../containers/contexts/snackbar';

export const useImageUpload = () => {
  const { onOpen } = useSnackbar();
  const [image, setImage] = useState<File | undefined>();
  const [imageDataUrl, setImageDataUrl] = useState<string | undefined>(undefined);
  const onReset = useCallback(() => {
    setImage(undefined);
  }, []);
  const onUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];

        if (file.size > 3000000) {
          return onOpen({ message: 'ファイルサイズが大きすぎます', status: 'error' });
        }

        setImage(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          if (typeof reader.result !== 'string') {
            throw new Error('アップロードされた画像が読み込めません');
          }

          return setImageDataUrl(reader.result);
        };
      }
    },
    [onOpen],
  );

  return { image, imageDataUrl, onReset, onUpload };
};
