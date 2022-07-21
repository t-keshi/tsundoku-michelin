import { PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { extendType, stringArg } from 'nexus';
import { BookLog } from 'nexus-prisma';

export const removeBookLogMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('removeBookLog', {
      type: BookLog.$name,
      args: { bookLogId: stringArg() },
      resolve: async (
        _,
        args: { bookLogId: string },
        ctx: {
          session: Session | null;
          prisma: PrismaClient;
        },
      ) => {
        if (!ctx.session) {
          throw new Error('Invalid session value');
        }

        const res = await ctx.prisma.bookLog.findUnique({
          where: {
            id: args.bookLogId,
          },
          select: {
            userId: true,
            bookId: true,
          },
        });
        console.log('##############', res, '##############');

        if (res?.userId !== ctx.session.user.uid) {
          throw new Error('Invalid user');
        }

        const deleteRes = await ctx.prisma.$transaction([
          ctx.prisma.book.update({
            where: { id: res.bookId },
            data: {
              bookLogCount: {
                increment: -1,
              },
            },
          }),
          ctx.prisma.bookLog.delete({
            where: { id: args.bookLogId },
          }),
        ]);

        console.log('##############', deleteRes, '##############');

        return deleteRes[1];
      },
    });
  },
});
