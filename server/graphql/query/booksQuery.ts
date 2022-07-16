import { Prisma, PrismaClient } from "@prisma/client";
import { extendType } from "nexus";
import { Book } from "nexus-prisma";

export const booksQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field("books", {
      type: Book.$name,
      resolve: async (
        _,
        __,
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
        const res = await ctx.prisma.book.findMany({ ...ctx.select });
        return res;
      },
    });
  },
});
