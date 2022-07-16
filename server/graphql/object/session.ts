import { objectType } from "nexus";
import { Session } from "nexus-prisma";

export const session = objectType({
  name: Session.$name,
  definition: (t) => {
    t.field(Session.id);
    t.field(Session.sessionToken);
    t.field(Session.userId);
    t.field(Session.expires);
    t.field(Session.user);
  },
});
