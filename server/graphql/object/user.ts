import { PrismaClient } from '@prisma/client';
import { objectType } from 'nexus';
import { User } from 'nexus-prisma';

export const user = objectType({
  name: User.$name,
  definition: (t) => {
    t.field(User.id);
    t.field(User.name);
    t.field(User.email);
    t.field(User.emailVerified);
    t.field(User.image);
    t.field(User.profile);
    t.field(User.onboarding);
    t.field({
      ...User.bookLogs,
      resolve: async (
        parent: { id: string },
        _,
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .bookLogs({ orderBy: { updatedAt: 'desc' } });
        console.log('##############', res, '##############');

        return res;
      },
    });
    t.field({
      ...User.bookshelfs,
      resolve: async (
        parent: { id: string },
        _,
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .bookshelfs({ orderBy: { updatedAt: 'desc' } });
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
