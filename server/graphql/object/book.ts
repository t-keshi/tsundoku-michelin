import { PrismaClient } from '@prisma/client';
import { objectType } from 'nexus';
import { Book } from 'nexus-prisma';

export const book = objectType({
  name: Book.$name,
  definition: (t) => {
    t.field(Book.id);
    t.field(Book.title);
    t.field(Book.image);
    t.field(Book.url);
    t.field(Book.bookLogCount);
    t.field(Book.bookshelfCount);
    t.field(Book.createdAt);
    t.field(Book.updatedAt);
    t.field({
      ...Book.bookLogs,
      resolve: async (
        parent: { id: string },
        _,
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.book
          .findUnique({
            where: { id: parent.id },
          })
          .bookLogs({ include: { user: true } });
        console.log('##############', res, '##############');

        return res;
      },
    });
    t.field({
      ...Book.bookContents,
      resolve: async (
        parent: { id: string },
        _,
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.book
          .findUnique({
            where: { id: parent.id },
          })
          .bookContents();
        console.log('##############', res, '##############');

        return res;
      },
    });
    t.field({
      ...Book.bookshelfs,
      resolve: async (
        parent: { id: string },
        _,
        ctx: {
          prisma: PrismaClient;
        },
      ) => {
        const res = await ctx.prisma.book
          .findUnique({
            where: { id: parent.id },
          })
          .bookshelfs();
        console.log('##############', res, '##############');

        return res;
      },
    });
  },
});
