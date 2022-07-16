import { objectType } from "nexus";
import { Account } from "nexus-prisma";

export const account = objectType({
  name: Account.$name,
  definition: (t) => {
    t.field(Account.id);
    t.field(Account.userId);
    t.field(Account.type);
    t.field(Account.provider);
    t.field(Account.providerAccountId);
    t.field(Account.refresh_token);
    t.field(Account.access_token);
    t.field(Account.expires_at);
    t.field(Account.scope);
    t.field(Account.id_token);
    t.field(Account.session_state);
  },
});
