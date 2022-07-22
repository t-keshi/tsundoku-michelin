import { PrismaClient } from '@prisma/client';
import { extendType, intArg, nullable, stringArg } from 'nexus';
import { Book } from 'nexus-prisma';

export const booksQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('books', {
      type: Book.$name,
      args: {
        keyword: nullable(stringArg()),
        cursor: nullable(stringArg()),
        limit: nullable(intArg()),
      },
      resolve: async (
        _,
        args: { keyword?: string; cursor?: string; limit?: number },
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.book.findMany({
          ...(args.limit && { take: args.limit }),
          ...(args.cursor && { cursor: { id: args.cursor }, skip: 1 }),
          ...(args.keyword && { where: { title: { contains: args.keyword } } }),
          orderBy: {
            bookshelfCount: 'asc',
          },
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
