import type { Preview } from '@storybook/react';
import { TopErrorBoundary } from '../src/components/organisms/ErrorBoundary';
import App from '../src/pages/_app';
import React from 'react';
import router from 'next/router';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [(Story) => <App Component={Story} pageProps={{ session: null }} />];
