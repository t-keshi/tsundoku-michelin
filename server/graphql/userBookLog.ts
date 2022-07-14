import { objectType } from "nexus";
import { UserBookLog } from "nexus-prisma";

export const userBookLog = objectType({
  name: UserBookLog.$name,
  definition: (t) => {
    t.field(UserBookLog.id);
    t.field(UserBookLog.userId);
    t.field(UserBookLog.bookId);
    t.field(UserBookLog.log);
    t.field(UserBookLog.createdAt);
    t.field(UserBookLog.updatedAt);
  },
});
