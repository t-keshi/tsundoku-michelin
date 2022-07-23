import { PrismaClient } from '@prisma/client';
import { Session } from 'next-auth';
import { extendType, nullable, stringArg } from 'nexus';
import { User } from 'nexus-prisma';

export const updateUserMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('updateUser', {
      type: User.$name,
      args: {
        name: nullable(stringArg()),
        image: nullable(stringArg()),
        profile: nullable(stringArg()),
        onboarding: nullable(stringArg()),
      },
      resolve: async (
        _,
        args: {
          name?: string;
          image?: string;
          profile?: string;
          onboarding?: string;
        },
        ctx: {
          session: Session | null;
          prisma: PrismaClient;
        },
      ) => {
        if (!ctx.session) {
          throw new Error('Invalid session value');
        }

        const { name, image, profile, onboarding } = args;

        const res = await ctx.prisma.user.update({
          where: { id: ctx.session?.user.uid ?? '' },
          data: {
            ...(name && { name }),
            ...(image && { image }),
            ...(profile && { profile }),
            ...(onboarding && { onboarding }),
          },
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
