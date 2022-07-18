import type { AppProps } from "next/app";
import "../components/system/configs/global.css";
import { AuthModal } from "../components/organisms/AuthModal";
import { Snackbar } from "../components/ui/Snackbar/Snackbar";
import { AuthModalProvider } from "../containers/contexts/authModal";
import { SnackbarProvider } from "../containers/contexts/snackbar";
import { NextPageWithLayout } from "../type";
import { SessionProvider } from "next-auth/react";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <SnackbarProvider>
        <AuthModalProvider>
          {getLayout(<Component {...pageProps} />)}
          <Snackbar />
          <AuthModal />
        </AuthModalProvider>
      </SnackbarProvider>
    </SessionProvider>
  );
};

export default App;
