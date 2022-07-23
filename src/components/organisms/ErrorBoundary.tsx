import React, { useCallback } from 'react';
import { datadogLogs } from '@datadog/browser-logs';
import { MdRefresh } from 'react-icons/md';
import { Avatar, Box, Button, Flex, Typography } from '../ui';

interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

type FallbackRender = (
  props: FallbackProps,
) => React.ReactElement<unknown, string | React.FunctionComponent | typeof React.Component> | null;

interface ErrorBoundaryProps {
  onResetKeysChange?: (
    prevResetKeys: Array<unknown> | undefined,
    resetKeys: Array<unknown> | undefined,
  ) => void;
  onReset?: (...args: Array<unknown>) => void;
  onError?: (error: Error, info: { componentStack: string }) => void;
  resetKeys?: Array<unknown>;
  fallbackRender: FallbackRender;
}

type ErrorBoundaryState = { error: Error | null };

const initialState: ErrorBoundaryState = { error: null };

export class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  // eslint-disable-next-line react/state-in-constructor
  state = initialState;

  updatedWithError = false;

  componentDidMount(): void {
    const { error } = this.state;

    if (error !== null) {
      this.updatedWithError = true;
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    const { error } = this.state;
    const { resetKeys, onResetKeysChange } = this.props;
    const isResetKeysChanged =
      prevProps.resetKeys &&
      resetKeys &&
      (prevProps.resetKeys.length !== resetKeys.length ||
        prevProps.resetKeys.some((item, index) => !Object.is(item, resetKeys[index])));

    if (error !== null && !this.updatedWithError) {
      this.updatedWithError = true;

      return;
    }

    if (error !== null && isResetKeysChanged) {
      onResetKeysChange?.(prevProps.resetKeys, resetKeys);
      this.reset();
    }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    const { onError } = this.props;
    const errorDetails = {
      customFields: {
        detectSeverity: 'error',
        info,
      },
    };
    onError?.(error, info);
    datadogLogs.logger.log(error.message, errorDetails, 'error');
  }

  resetErrorBoundary = (...args: Array<unknown>): void => {
    const { onReset } = this.props;

    onReset?.(...args);
    this.reset();
  };

  reset(): void {
    this.updatedWithError = false;
    this.setState(initialState);
  }

  render(): React.ReactNode {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;

    if (error !== null) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      return fallbackRender(props);
    }

    return children;
  }
}

export const Fallback: React.FC = () => {
  const handleRefresh = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Box sx={{ bgColor: 'primary-light', minHeight: '100vh' }}>
      <main>
        <Flex
          sx={{
            flexDirection: 'column',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar size="lg" src="/brand-icon.png" />
          <Box sx={{ mt: 2 }} />
          <Typography variant="h1" paragraph>
            SORRY
          </Typography>
          <Typography variant="body1" color="secondary">
            予期せぬエラーが発生しました。
            <br />
            ページリロードをお試しの上、解決しない場合は、
            <br />
            管理者(quick.resp.biz094@gmaill.com)までお問合せください:bow:
          </Typography>
          <Box sx={{ mt: 4 }} />
          <Button variant="contained" color="primary" onClick={handleRefresh}>
            <MdRefresh />
          </Button>
        </Flex>
      </main>
    </Box>
  );
};

export const TopErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ErrorBoundary fallbackRender={Fallback}>{children}</ErrorBoundary>
);
