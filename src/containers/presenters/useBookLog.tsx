import { useRouter } from "next/router";
import { sdk, sdkHooks } from "../services/sdk";
import { useMutation } from "../../helpers/hooks/useMutation";
import { fetchEditBookLogInfo } from "../services/query/fetchEditBookLogInfo";

export const useBookLog = (uid: string) => {
  const router = useRouter();
  const query = router.query as { bookId: string };

  const { data, error } = sdkHooks.useFetchEditBookLogInfo(
    fetchEditBookLogInfo,
    {
      userId: uid,
      bookId: query.bookId,
    },
    { suspense: true }
  );

  const { mutate: createBookLog } = useMutation(
    (log: string) => sdk.CreateBookLog({ bookId: query.bookId, log }),
    {
      successMessage: "読書ログを投稿しました",
    }
  );

  const { mutate: updateBookLog } = useMutation(
    (log: string) =>
      sdk.UpdateBookLog({ bookLogId: data?.bookLog?.id || "", log }),
    {
      successMessage: "読書ログを更新しました",
    }
  );

  return {
    data,
    isLoading: !error && !data,
    onSubmit: data?.bookLog?.id ? updateBookLog : createBookLog,
  };
};
