import { PrismaClient } from "@prisma/client";
import { extendType, objectType, stringArg } from "nexus";
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
  },
});

export const bookContentQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field("bookContents", {
      type: BookContent.$name,
      args: { bookId: stringArg() },
      resolve: async (
        _,
        args: { bookId: string },
        ctx: { prisma: PrismaClient }
      ) => {
        const res = await ctx.prisma.bookContent.findMany({
          where: { bookId: args.bookId },
        });
        return res;
      },
    });
  },
});
