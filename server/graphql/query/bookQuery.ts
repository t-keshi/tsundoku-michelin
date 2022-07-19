import { PrismaClient } from '@prisma/client';
import { extendType, stringArg } from 'nexus';
import { Book } from 'nexus-prisma';

export const bookQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('book', {
      type: Book.$name,
      args: { bookId: stringArg() },
      resolve: async (
        _,
        args: { bookId: string },
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.book.findUnique({
          where: { id: args.bookId },
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
