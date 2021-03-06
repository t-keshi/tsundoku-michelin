import { Prisma, PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { extendType, stringArg } from 'nexus';
import { BookLog } from 'nexus-prisma';

export const createBookLogMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('createBookLog', {
      type: BookLog.$name,
      args: { bookId: stringArg(), log: stringArg() },
      resolve: async (
        _,
        args: { bookId: string; log: string },
        ctx: {
          session: Session | null;
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<Prisma.BookLogUpdateArgs, Prisma.BookLogUpdateArgs>,
            'select'
          >;
        },
      ) => {
        if (!ctx.session) {
          throw new Error('Invalid session value');
        }
        const { session } = ctx;

        const res = await ctx.prisma.$transaction([
          ctx.prisma.book.update({
            where: { id: args.bookId },
            data: {
              bookLogCount: {
                increment: 1,
              },
            },
            ...ctx.select,
          }),
          ctx.prisma.bookLog.create({
            data: {
              log: args.log,
              bookId: args.bookId,
              userId: session.user.uid,
            },
            ...ctx.select,
          }),
        ]);
        console.log('##############', res, '##############');

        return res[1];
      },
    });
  },
});
