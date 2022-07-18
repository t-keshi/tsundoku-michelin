import { sdk, sdkHooks } from "../services/sdk";
import { fetchUserOnboard } from "../services/query/fetchUserOnboard";
import { useMutation } from "../../helpers/hooks/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const useOnboarding = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const uid = session?.user.uid;
  const { data, error } = sdkHooks.useFetchUserOnboard(
    uid ? fetchUserOnboard : null,
    {
      userId: uid || "",
    },
    { suspense: true }
  );

  const { mutate: resetUsername } = useMutation((uid: string) =>
    sdk.ResetUsername({ userId: uid })
  );

  const { mutate: registerUser } = useMutation(
    async ({
      userId,
      name,
      image,
    }: {
      userId: string;
      name: string;
      image?: File;
    }) => {
      if (!image) {
        return await sdk.OnboardUser({ userId, name });
      }

      const formData = new FormData();
      formData.append("image", image);
      const _res = await fetch("/api/image", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const imgRes: { image: string } = await _res.json();
      const imageUrl = imgRes.image;

      const res = await sdk.OnboardUser({ userId, name, image: imageUrl });
      return res;
    },
    {
      onSuccess: () => router.push("/"),
    }
  );

  const shouldOnboard = data && data.user && data.user.onboarding === null;
  const alreadOnboared = data && data.user && data.user.onboarding === "DONE";

  useEffect(() => {
    // FIXME: 名前の更新->削除->更新が非常に冗長なので、最初の更新をしないようにする
    if (uid && shouldOnboard) {
      resetUsername(uid);
    }

    if (alreadOnboared) {
      router.push("/");
    }
  }, [uid, shouldOnboard, resetUsername, router, alreadOnboared]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  });

  return {
    data,
    isLoading: !error && !data,
    onRegister: registerUser,
  };
};
