import { extendType, objectType } from "nexus";
import { Book } from "nexus-prisma";
import { getBooks } from "../usecase/getBooks";

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
  },
});

export const bookQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.nonNull.list.field("books", {
      type: Book.$name,
      resolve: async () => {
        const res = await getBooks();
        return res;
      },
    });
  },
});
