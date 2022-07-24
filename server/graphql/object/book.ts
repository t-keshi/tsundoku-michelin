import { objectType } from 'nexus';
import { Book } from 'nexus-prisma';

export const book = objectType({
  name: Book.$name,
  definition: (t) => {
    t.field(Book.id);
    t.field(Book.title);
    t.field(Book.image);
    t.field(Book.url);
    t.field(Book.bookLogCount);
    t.field(Book.bookshelfCount);
    t.field(Book.createdAt);
    t.field(Book.updatedAt);
    t.field(Book.bookLogs);
    t.field(Book.bookContents);
    t.field(Book.bookshelfs);
  },
});

export const BooksEdge = objectType({
  name: 'BooksEdge',
  definition: (t) => {
    t.nullable.boolean('hasNextPage');
    t.list.field('books', {
      type: Book.$name,
    });
  },
});

export const BooksCount = objectType({
  name: 'BooksCount',
  definition: (t) => {
    t.int('count');
  },
});
