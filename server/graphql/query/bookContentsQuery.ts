import { Prisma, PrismaClient } from "@prisma/client";
import { Session } from "next-auth";
import { extendType, stringArg } from "nexus";
import { BookContent } from "nexus-prisma";

export const bookContentsQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field("bookContents", {
      type: BookContent.$name,
      args: { bookId: stringArg() },
      resolve: async (
        _,
        args: { bookId: string },
        ctx: {
          session: Session | null;
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<
              Prisma.BookLogFindManyArgs,
              Prisma.BookLogFindManyArgs
            >,
            "select"
          >;
        }
      ) => {
        const res = await ctx.prisma.bookContent.findMany({
          where: { bookId: args.bookId },
          ...ctx.select,
        });
        return res;
      },
    });
  },
});