import { objectType } from "nexus";
import { User } from "nexus-prisma";

export const user = objectType({
  name: User.$name,
  definition: (t) => {
    t.field(User.id);
    t.field(User.name);
    t.field(User.email);
    t.field(User.emailVerified);
    t.field(User.image);
    t.field(User.accounts);
    t.field(User.sessions);
    t.field(User.bookLogs);
    t.field(User.bookShelfs);
  },
});
