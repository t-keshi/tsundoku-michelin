import { objectType } from "nexus";
import { VerificationToken } from "nexus-prisma";

export const verificationToken = objectType({
  name: VerificationToken.$name,
  definition: (t) => {
    t.field(VerificationToken.identifier);
    t.field(VerificationToken.token);
    t.field(VerificationToken.expires);
  },
});
