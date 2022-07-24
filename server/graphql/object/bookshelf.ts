import { objectType } from 'nexus';
import { Bookshelf } from 'nexus-prisma';

export const bookshelf = objectType({
  name: Bookshelf.$name,
  definition: (t) => {
    t.field(Bookshelf.id);
    t.field(Bookshelf.bookId);
    t.field(Bookshelf.userId);
    t.field(Bookshelf.createdAt);
    t.field(Bookshelf.updatedAt);
    t.field(Bookshelf.user);
    t.field(Bookshelf.book);
  },
});
