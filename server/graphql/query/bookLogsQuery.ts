import { Prisma, PrismaClient } from "@prisma/client";
import { Session } from "next-auth";
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
        if (!ctx.session) {
          throw new Error("Invalid session value");
        }

        const res = await ctx.prisma.bookLog.findMany({
          where: { userId: ctx.session.user.uid },
          ...ctx.select,
        });
        return res;
      },
    });
  },
});
