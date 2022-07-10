import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "../components/system/configs/global.css";
import { AuthModal } from "../components/ui-group/AuthModal";
import { Snackbar } from "../components/ui/Snackbar/Snackbar";
import { AuthModalProvider } from "../containers/authModal";
import { SnackbarProvider } from "../containers/snackbar";
import { NextPageWithLayout } from "../type";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SnackbarProvider>
      <AuthModalProvider>
        {getLayout(<Component {...pageProps} />)}
        <Snackbar />
        <AuthModal />
      </AuthModalProvider>
    </SnackbarProvider>
  );
};

export default App;
