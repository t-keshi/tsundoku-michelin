import { Prisma, PrismaClient } from "@prisma/client";
import { extendType, stringArg } from "nexus";
import { User } from "nexus-prisma";

export const resetUsernameMutation = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("resetUser", {
      type: User.$name,
      args: { userId: stringArg() },
      resolve: async (
        _,
        args: { userId: string },
        ctx: {
          prisma: PrismaClient;
          select: Pick<
            Prisma.SelectSubset<Prisma.UserUpdateArgs, Prisma.UserUpdateArgs>,
            "select"
          >;
        }
      ) => {
        const res = await ctx.prisma.user.update({
          where: { id: args.userId },
          data: { name: "" },
          ...ctx.select,
        });

        return res;
      },
    });
  },
});
