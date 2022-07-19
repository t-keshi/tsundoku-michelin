import { Prisma, PrismaClient } from "@prisma/client";
import { extendType, nullable, stringArg } from "nexus";
import { Book } from "nexus-prisma";

export const booksQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field("books", {
      type: Book.$name,
      args: { keyword: nullable(stringArg()) },
      resolve: async (
        _,
        args: { keyword: string },
        ctx: {
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<
              Prisma.BookFindManyArgs,
              Prisma.BookFindManyArgs
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
