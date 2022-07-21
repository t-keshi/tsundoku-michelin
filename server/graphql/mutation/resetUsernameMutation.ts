import { PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { extendType } from 'nexus';
import { User } from 'nexus-prisma';

export const resetUsernameMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('resetUser', {
      type: User.$name,
      resolve: async (
        _,
        __,
        ctx: {
          session: Session | null;
          prisma: PrismaClient;
        },
      ) => {
        if (!ctx.session) {
          throw new Error('Invalid session value');
        }

        const res = await ctx.prisma.user.update({
          where: { id: ctx.session.user.uid },
          data: { name: '' },
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
