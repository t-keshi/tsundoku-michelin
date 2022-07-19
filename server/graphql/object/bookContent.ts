import { objectType } from "nexus";
import { BookContent } from "nexus-prisma";

export const bookContent = objectType({
  name: BookContent.$name,
  definition: (t) => {
    t.field(BookContent.id);
    t.field(BookContent.bookId);
    t.field(BookContent.index);
    t.field(BookContent.type);
    t.field(BookContent.heading);
    t.field(BookContent.createdAt);
    t.field(BookContent.updatedAt);
    t.field(BookContent.book);
  },
});
