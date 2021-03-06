import { PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { extendType, stringArg } from 'nexus';
import { BookLog } from 'nexus-prisma';

export const updateBookLogMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('updateBookLog', {
      type: BookLog.$name,
      args: { bookLogId: stringArg(), log: stringArg() },
      resolve: async (
        _,
        args: { bookLogId: string; log: string },
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
          },
        });
        console.log('##############', res, '##############');

        if (res?.userId !== ctx.session.user.uid) {
          throw new Error('Invalid user');
        }

        const updateRes = await ctx.prisma.bookLog.update({
          where: {
            id: args.bookLogId,
          },
          data: { log: args.log },
        });
        console.log('##############', updateRes, '##############');

        return updateRes;
      },
    });
  },
});
