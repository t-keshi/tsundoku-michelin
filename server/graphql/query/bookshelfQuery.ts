import { datadogLogs } from '@datadog/browser-logs';
import { PrismaClient } from '@prisma/client';
import { extendType, nullable, stringArg } from 'nexus';
import { Bookshelf } from 'nexus-prisma';

export const bookshelfQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.nullable.field('bookshelf', {
      type: Bookshelf.$name,
      args: { userId: nullable(stringArg()), bookId: nullable(stringArg()) },
      resolve: async (
        _,
        args: { userId?: string; bookId?: string },
        ctx: { prisma: PrismaClient },
      ) => {
        const res = await ctx.prisma.bookshelf
          .findFirst({
            where: {
              ...(args.userId && { userId: args.userId }),
              ...(args.bookId && { bookId: args.bookId }),
            },
          })
          .catch((err) => datadogLogs.logger.error(err.message));

        return res;
      },
    });
  },
});
