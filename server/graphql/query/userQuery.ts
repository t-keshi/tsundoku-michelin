import { Prisma, PrismaClient } from '@prisma/client';
import { extendType, stringArg } from 'nexus';
import { User } from 'nexus-prisma';

export const userQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('user', {
      type: 'Userr',
      args: { userId: stringArg() },
      resolve: async (
        _,
        args: { userId: string },
        ctx: {
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<Prisma.BookFindUniqueArgs, Prisma.BookContentFindManyArgs>,
            'select'
          >;
        },
      ) => {
        const res = await ctx.prisma.user.findUnique({
          where: { id: args.userId },
          ...ctx.select,
        });
        parseInt('1');
        return res;
      },
    });
  },
});
