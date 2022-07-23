import { PrismaClient } from '@prisma/client';
import { extendType, nullable, stringArg } from 'nexus';
import { Bookshelf } from 'nexus-prisma';

export const bookshelfsQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('bookshelfs', {
      type: Bookshelf.$name,
      args: { userId: nullable(stringArg()), bookId: nullable(stringArg()) },
      resolve: async (
        _,
        args: { userId?: string; bookId?: string },
        ctx: { prisma: PrismaClient },
      ) => {
        console.log({ ...(args.userId && { userId: args.userId }) });
        const res = await ctx.prisma.bookshelf.findMany({
          where: {
            ...(args.userId && { userId: args.userId }),
          },
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
