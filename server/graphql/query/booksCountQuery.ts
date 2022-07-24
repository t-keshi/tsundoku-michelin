import { PrismaClient } from '@prisma/client';
import { extendType } from 'nexus';

export const booksCountQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('booksCount', {
      type: 'BooksCount',
      resolve: async (
        _,
        __,
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.book.count();
        console.log('##############', res, '##############');

        return { count: res };
      },
    });
  },
});
