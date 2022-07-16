import { objectType } from "nexus";
import { BookLog } from "nexus-prisma";

export const bookLog = objectType({
  name: BookLog.$name,
  definition: (t) => {
    t.field(BookLog.id);
    t.field(BookLog.userId);
    t.field(BookLog.bookId);
    t.field(BookLog.log);
    t.field(BookLog.createdAt);
    t.field(BookLog.updatedAt);
    t.field(BookLog.book);
    t.field(BookLog.user);
  },
});
