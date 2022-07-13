import { extendType, objectType } from "nexus";
import { Book } from "nexus-prisma";
import { getBooks } from "../usecase/getBooks";

export const book = objectType({
  name: Book.$name,
  definition: (t) => {
    t.field(Book.id);
    t.field(Book.userBookLog);
  },
});

export const bookQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.nonNull.list.field(Book.$name, {
      type: Book.$name,
      resolve: async () => {
        const res = await getBooks();
        return res;
      },
    });
  },
});
