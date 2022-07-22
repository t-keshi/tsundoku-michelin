import { PrismaClient } from '@prisma/client';
import { extendType, intArg, nullable, stringArg } from 'nexus';

export const booksEdgeQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('booksEdge', {
      type: 'BooksEdge',
      args: {
        keyword: nullable(stringArg()),
        cursor: nullable(stringArg()),
        limit: nullable(intArg()),
      },
      resolve: async (
        _,
        args: { keyword?: string; cursor?: string; limit?: number },
        ctx: { prisma: PrismaClient },
      ) => {
        const res = await ctx.prisma.book.findMany({
          ...(args.limit && { take: args.limit }),
          ...(args.cursor && { cursor: { id: args.cursor }, skip: 1 }),
          ...(args.keyword && { where: { title: { contains: args.keyword } } }),
          orderBy: {
            bookshelfCount: 'desc',
          },
        });
        console.log('##############', res, '##############');

        return {
          endCursor: res.length > 0 ? res[res.length - 1].id : null,
          books: res,
        };
      },
    });
  },
});
