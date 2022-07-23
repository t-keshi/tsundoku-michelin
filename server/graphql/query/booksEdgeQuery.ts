import { PrismaClient } from '@prisma/client';
import { extendType, intArg, nullable, stringArg } from 'nexus';

export const booksEdgeQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('booksEdge', {
      type: 'BooksEdge',
      args: {
        keyword: nullable(stringArg()),
        offset: nullable(intArg()),
        limit: nullable(intArg()),
      },
      resolve: async (
        _,
        args: { keyword?: string; offset?: number; limit?: number },
        ctx: { prisma: PrismaClient },
      ) => {
        const res = await ctx.prisma.book.findMany({
          ...(args.keyword && { where: { title: { contains: args.keyword } } }),
          ...(args.offset && { skip: args.offset }),
          ...(args.limit && { take: args.limit + 1 }),
          orderBy: {
            bookshelfCount: 'desc',
          },
        });
        console.log('##############', res, '##############');

        return {
          hasNextPage: args.limit ? res.length === args.limit + 1 : null,
          books: args.limit ? res.slice(0, args.limit) : res,
        };
      },
    });
  },
});
