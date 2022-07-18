import { useCallback } from "react";
import { createReducerContext } from "../../helpers/utils/createReducerContext";
import { produce } from "immer";

interface AuthModalState {
  isOpen: boolean;
  isLoggedIn: boolean;
}

type Action = { type: "open" | "close" | "toggle" | "login" | "logout" };

const initialState: AuthModalState = {
  isOpen: false,
  isLoggedIn: false,
};

const reducer = produce((draft: AuthModalState, action: Action): void => {
  switch (action.type) {
    case "open":
      draft.isOpen = true;
      return;

    case "close":
      draft.isOpen = false;
      return;

    case "toggle":
      draft.isOpen = !draft.isOpen;
      return;

    case "login":
      draft.isLoggedIn = true;
      return;

    case "logout":
      draft.isLoggedIn = false;
      return;

    default:
      throw new Error("actionの値が正しくありません");
  }
});

const AuthModalContext = createReducerContext<typeof reducer>(
  reducer,
  initialState
);

const useAuthModalBase = AuthModalContext[0];
export const AuthModalProvider = AuthModalContext[1];

export const useAuthModal = () => {
  const [{ isOpen, isLoggedIn }, dispatch] = useAuthModalBase();

  const onClose = useCallback(() => {
    return dispatch({ type: "close" });
  }, [dispatch]);

  const onOpen = useCallback(() => {
    return dispatch({ type: "open" });
  }, [dispatch]);

  const onToggle = useCallback(() => {
    return dispatch({ type: "toggle" });
  }, [dispatch]);

  const onLogin = useCallback(() => {
    return dispatch({ type: "login" });
  }, [dispatch]);

  const onLogout = useCallback(() => {
    return dispatch({ type: "logout" });
  }, [dispatch]);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    isLoggedIn,
    onLogin,
    onLogout,
  };
};
