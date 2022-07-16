import { Prisma, PrismaClient } from "@prisma/client";
import { extendType, stringArg } from "nexus";
import { Book } from "nexus-prisma";

export const booksSearchQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field("booksSearch", {
      type: Book.$name,
      args: { keyword: stringArg() },
      resolve: async (
        _,
        args: { keyword: string },
        ctx: {
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<
              Prisma.BookFindManyArgs,
              Prisma.BookContentFindManyArgs
            >,
            "select"
          >;
        }
      ) => {
        const res = await ctx.prisma.book.findMany({
          ...(args.keyword && { where: { title: { contains: args.keyword } } }),
          ...ctx.select,
        });
        return res;
      },
    });
  },
});
