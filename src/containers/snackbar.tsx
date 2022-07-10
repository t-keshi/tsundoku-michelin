import React, { useCallback } from "react";
import { createReducerContext } from "../utils/createReducerContext";
import { produce } from "immer";

type State = {
  isOpen: boolean;
  status: "success" | "error";
  message: string;
};

const initialState: State = {
  isOpen: false,
  status: "success",
  message: "",
};

type Close = {
  type: "close";
};
type Open = {
  type: "open";
  payload: {
    status: "success" | "error";
    message: string;
  };
};

type Action = Close | Open;

const reducer = produce((draft: State, action: Action): void => {
  switch (action.type) {
    case "open":
      draft.isOpen = true;
      draft.status = action.payload.status;
      draft.message = action.payload.message;
      return;

    case "close":
      draft.isOpen = false;
      draft.message = "";
      draft.status = "success";
      return;

    default:
      throw new Error("actionの値が正しくありません");
  }
});

const SnackbarContext = createReducerContext<typeof reducer>(
  reducer,
  initialState
);

const useSnackbarBase = SnackbarContext[0];
export const SnackbarProvider = SnackbarContext[1];

export const useSnackbar = () => {
  const [{ isOpen, message, status }, dispatch] = useSnackbarBase();

  const onClose = useCallback(() => {
    return dispatch({ type: "close" });
  }, [dispatch]);

  const onOpen = useCallback(
    ({ message, status }: { message: string; status: "success" | "error" }) => {
      return dispatch({ type: "open", payload: { message, status } });
    },
    [dispatch]
  );

  return {
    isOpen,
    message,
    status,
    onOpen,
    onClose,
  };
};
