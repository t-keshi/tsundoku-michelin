import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '../components/system/configs/global.css';
import { datadogLogs } from '@datadog/browser-logs';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';
import { AuthModal } from '../components/organisms/AuthModal';
import { Snackbar } from '../components/ui/Snackbar/Snackbar';
import { AuthModalProvider } from '../containers/contexts/authModal';
import { SnackbarProvider } from '../containers/contexts/snackbar';
import { NextPageWithLayout } from '../type';
import { TopErrorBoundary } from '../components/organisms/ErrorBoundary';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

datadogLogs.init({
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN || '',
  site: 'datadoghq.com',
  forwardErrorsToLogs: true,
  sampleRate: 100,
});

const App = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  usePageViews();

  return (
    <>
      <GoogleAnalytics />
      <TopErrorBoundary>
        <SessionProvider session={session}>
          <SnackbarProvider>
            <AuthModalProvider>
              {getLayout(<Component {...pageProps} />)}
              <Snackbar />
              <AuthModal />
            </AuthModalProvider>
          </SnackbarProvider>
        </SessionProvider>
      </TopErrorBoundary>
    </>
  );
};

export default App;
