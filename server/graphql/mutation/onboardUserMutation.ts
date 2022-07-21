import { Prisma, PrismaClient } from '@prisma/client';
import { extendType, nullable, stringArg } from 'nexus';
import { User } from 'nexus-prisma';

export const onboardUserMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.field('onboardUser', {
      type: User.$name,
      args: {
        userId: stringArg(),
        name: stringArg(),
        image: nullable(stringArg()),
      },
      resolve: async (
        _,
        args: {
          userId: string;
          name: string;
          image?: string;
        },
        ctx: {
          prisma: PrismaClient;
          select: Pick<Prisma.SelectSubset<Prisma.UserUpdateArgs, Prisma.UserUpdateArgs>, 'select'>;
        },
      ) => {
        const { userId, name, image } = args;
        const res = await ctx.prisma.user.update({
          where: { id: userId },
          data: {
            name,
            onboarding: 'DONE',
            ...(image && { image }),
          },
          ...ctx.select,
        });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
