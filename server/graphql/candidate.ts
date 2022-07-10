import { PrismaClient } from "@prisma/client";
import { extendType, objectType } from "nexus";
import { Candidate } from "nexus-prisma";

const prisma = new PrismaClient();

export const candidate = objectType({
  name: Candidate.$name,
  definition: (t) => {
    t.field(Candidate.id);
    t.field(Candidate.status);
    t.field(Candidate.name);
    t.field(Candidate.age);
    t.field(Candidate.gender);
    t.field(Candidate.depertment);
    t.field(Candidate.createdAt);
    t.field(Candidate.updatedAt);
  },
});

export const candidatesQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.nonNull.list.field("candidates", {
      type: Candidate.$name,
      resolve: async () => {
        const candidates = await prisma.candidate.findMany();
        return candidates;
      },
    });
  },
});
