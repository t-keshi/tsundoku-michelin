import { sdk, sdkHooks } from "../services/sdk";
import { useMutation } from "../../helpers/hooks/useMutation";
import { useRouter } from "next/router";
import { fetchBookWithContents } from "../services/query/fetchBookWithContents";

export const useBookLog = () => {
  const router = useRouter();
  const query = router.query as { bookId: string; logId: string };
  const { data, error } = sdkHooks.useFetchBookWithContents(
    fetchBookWithContents,
    {
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
    (log: string) => sdk.UpdateBookLog({ bookLogId: query.logId, log }),
    {
      successMessage: "読書ログを更新しました",
    }
  );

  return {
    data,
    isLoading: !error && !data,
    onSubmit: router.pathname.includes("new") ? createBookLog : updateBookLog,
  };
};
