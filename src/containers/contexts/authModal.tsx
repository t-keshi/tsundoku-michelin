import { useCallback } from "react";
import { produce } from "immer";
import { createReducerContext } from "../../helpers/utils/createReducerContext";

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

  const onClose = useCallback(() => dispatch({ type: "close" }), [dispatch]);

  const onOpen = useCallback(() => dispatch({ type: "open" }), [dispatch]);

  const onToggle = useCallback(() => dispatch({ type: "toggle" }), [dispatch]);

  const onLogin = useCallback(() => dispatch({ type: "login" }), [dispatch]);

  const onLogout = useCallback(() => dispatch({ type: "logout" }), [dispatch]);

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
