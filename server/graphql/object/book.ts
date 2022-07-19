import { PrismaClient } from "@prisma/client";
import { objectType } from "nexus";
import { Book } from "nexus-prisma";

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
      resolve: (
        _,
        args: { bookId: string },
        ctx: {
          prisma: PrismaClient;
        }
      ) => {
        ctx.prisma.book
          .findUnique({
            where: { id: args.bookId },
          })
          .bookLogs({ include: { user: true } });
      },
    });
    t.field({
      ...Book.bookContents,
      resolve: (
        _,
        args: { bookId: string },
        ctx: {
          prisma: PrismaClient;
        }
      ) => {
        ctx.prisma.book
          .findUnique({
            where: { id: args.bookId },
          })
          .bookContents();
      },
    });
    t.field({
      ...Book.bookshelfs,
      resolve: (
        _,
        args: { bookId: string },
        ctx: {
          prisma: PrismaClient;
        }
      ) => {
        ctx.prisma.book
          .findUnique({
            where: { id: args.bookId },
          })
          .bookshelfs();
      },
    });
  },
});
