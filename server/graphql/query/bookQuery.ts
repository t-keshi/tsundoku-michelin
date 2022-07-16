import { Prisma, PrismaClient } from "@prisma/client";
import { extendType, stringArg } from "nexus";
import { Book } from "nexus-prisma";

export const bookQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.field("book", {
      type: Book.$name,
      args: { id: stringArg() },
      resolve: async (
        _,
        args: { id: string },
        ctx: {
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<
              Prisma.BookFindUniqueArgs,
              Prisma.BookContentFindManyArgs
            >,
            "select"
          >;
        }
      ) => {
        const res = await ctx.prisma.book.findUnique({
          where: { id: args.id },
          ...ctx.select,
        });
        return res;
      },
    });
  },
});
