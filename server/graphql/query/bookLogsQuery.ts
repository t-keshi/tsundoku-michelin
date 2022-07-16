import { Prisma, PrismaClient } from "@prisma/client";
import { extendType, stringArg } from "nexus";
import { BookLog } from "nexus-prisma";

export const bookLogsQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.list.field("bookLogs", {
      type: BookLog.$name,
      args: { userId: stringArg() },
      resolve: async (
        _,
        args: { userId: string },
        ctx: {
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
        const res = await ctx.prisma.bookLog.findMany({
          where: { userId: "" },
          ...ctx.select,
        });
        return res;
      },
    });
  },
});
