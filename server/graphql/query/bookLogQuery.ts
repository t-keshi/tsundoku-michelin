import { PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { extendType, nullable, stringArg } from 'nexus';
import { BookLog } from 'nexus-prisma';

export const bookLogQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.nullable.field('bookLog', {
      type: BookLog.$name,
      args: { bookId: nullable(stringArg()), userId: nullable(stringArg()) },
      resolve: async (
        _,
        args: { bookId?: string; userId?: string },
        ctx: {
          session: Session | null;
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.bookLog.findFirst({
          where: {
            ...(args.userId && { userId: args.userId }),
            ...(args.bookId && { bookId: args.bookId }),
          },
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
