import { datadogLogs } from '@datadog/browser-logs';
import { PrismaClient } from '@prisma/client';
import { extendType, stringArg } from 'nexus';
import { User } from 'nexus-prisma';

export const userQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('user', {
      type: User.$name,
      args: { userId: stringArg() },
      resolve: async (
        _,
        args: { userId: string },
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.user
          .findUnique({
            where: { id: args.userId },
          })
          .catch((err) => datadogLogs.logger.error(err.message));

        return res;
      },
    });
  },
});
