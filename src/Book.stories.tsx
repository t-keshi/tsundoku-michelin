import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './pages/index';
import { userEvent, within } from '@storybook/testing-library';
import BooksListPage from './pages/books-list/[page]';
import SearchPage from './pages/search';
import { BooksListTemplate } from './templates/books-list';
import { BookTemplate } from './templates/book';

const meta: Meta<typeof BookTemplate> = {
  component: BookTemplate,
  title: 'Book',
};
export default meta;

type Story = StoryObj<typeof BookTemplate>;

export const Default: Story = {
  args: {
    bookWithLogs: {
      bookLogs: [
        {
          id: '1',
          log: 'いい本だった。僕は好きだな。',
          updatedAt: '2022-01-01T00:00:00.000Z',
          user: {
            id: '2',
            name: '山田花子',
            image: 'https://avatars.githubusercontent.com/u/60288604?v=4',
          },
        },
      ],
      id: '1',
      image: 'https://m.media-amazon.com/images/I/51LkcwTMC8L._SX218_BO1,204,203,200_QL40_ML2_.jpg',
      title: 'Clean Architecture 達人に学ぶソフトウェアの構造と設計',
      url: '/books/1',
    },
  },
};
