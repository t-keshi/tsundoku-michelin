import { PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { extendType, stringArg } from 'nexus';
import { Bookshelf } from 'nexus-prisma';

export const removeBookshelfMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('removeBookshelf', {
      type: Bookshelf.$name,
      args: { bookId: stringArg() },
      resolve: async (
        _,
        args: { bookId: string; log: string },
        ctx: {
          session: Session | null;
          prisma: PrismaClient;
        },
      ) => {
        if (!ctx.session) {
          throw new Error('Invalid session value');
        }

        const res = await ctx.prisma.$transaction([
          ctx.prisma.book.update({
            where: { id: args.bookId },
            data: {
              bookshelfCount: {
                increment: -1,
              },
            },
          }),
          ctx.prisma.bookshelf.deleteMany({
            where: {
              bookId: args.bookId,
              userId: ctx.session.user.uid,
            },
          }),
        ]);
        console.log('##############', res, '##############');

        return { id: args.bookId, userId: ctx.session.user.uid };
      },
    });
  },
});
