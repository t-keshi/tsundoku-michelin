import { useCallback, useState } from "react";

export const useImageUpload = () => {
  const [image, setImage] = useState<File | undefined>();
  const [imageDataUrl, setImageDataUrl] = useState<string | undefined>(
    undefined
  );
  const onReset = useCallback(() => {
    setImage(undefined);
  }, []);
  const onUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (typeof reader.result !== "string") {
          throw new Error("アップロードされた画像が読み込めません");
        }
        return setImageDataUrl(reader.result);
      };
    }
  }, []);

  return { image, imageDataUrl, onReset, onUpload };
};
