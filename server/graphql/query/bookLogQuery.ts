import { PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { extendType, stringArg } from 'nexus';
import { BookLog } from 'nexus-prisma';

export const bookLogQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.nullable.field('bookLog', {
      type: BookLog.$name,
      args: { bookId: stringArg(), userId: stringArg() },
      resolve: async (
        _,
        args: { bookId: string; userId: string },
        ctx: {
          session: Session | null;
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.bookLog.findFirst({
          where: { bookId: args.bookId, userId: args.userId },
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
