import { Prisma, PrismaClient } from '@prisma/client';
import { extendType, stringArg } from 'nexus';
import { Bookshelf } from 'nexus-prisma';

export const bookshelfQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('bookshelfs', {
      type: Bookshelf.$name,
      args: { userId: stringArg() },
      resolve: async (
        _,
        args: { userId: string },
        ctx: {
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<Prisma.BookshelfFindManyArgs, Prisma.BookshelfFindManyArgs>,
            'select'
          >;
        },
      ) => {
        const res = await ctx.prisma.bookshelf.findMany({
          where: { userId: args.userId },
          ...ctx.select,
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
