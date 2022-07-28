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
        limit: nullable(intArg()),
        offset: nullable(intArg()),
      },
      resolve: async (
        _,
        args: { keyword?: string; offset?: number; limit?: number },
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.book.findMany({
          ...(args.keyword && { where: { title: { contains: args.keyword } } }),
          ...(args.offset && { skip: args.offset }),
          ...(args.limit && { take: args.limit }),
          orderBy: [
            {
              bookshelfCount: 'desc',
            },
            { title: 'asc' },
          ],
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
