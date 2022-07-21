import { Prisma, PrismaClient } from '@prisma/client';
import { extendType, nullable, stringArg } from 'nexus';
import { Bookshelf } from 'nexus-prisma';

export const bookshelfQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('bookshelfs', {
      type: Bookshelf.$name,
      args: { userId: nullable(stringArg()), bookId: nullable(stringArg()) },
      resolve: async (
        _,
        args: { userId?: string; bookId?: string },
        ctx: {
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<Prisma.BookshelfFindManyArgs, Prisma.BookshelfFindManyArgs>,
            'select'
          >;
        },
      ) => {
        const res = await ctx.prisma.bookshelf.findMany({
          where: {
            ...(args.userId && { userId: args.userId }),
            ...(args.bookId && { bookId: args.bookId }),
          },
          ...ctx.select,
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
