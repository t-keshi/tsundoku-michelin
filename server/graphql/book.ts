import { PrismaClient } from "@prisma/client";
import { extendType, objectType, stringArg } from "nexus";
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
    t.field(Book.userBookLog);
    t.field(Book.bookContent);
  },
});

export const booksQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.nonNull.list.field("books", {
      type: Book.$name,
      resolve: async (_, __, ctx: { prisma: PrismaClient }) => {
        const res = await ctx.prisma.book.findMany();
        return res;
      },
    });
  },
});

export const bookQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.nonNull.field("book", {
      type: Book.$name,
      args: { id: stringArg() },
      resolve: async (
        _,
        args: { id: string },
        ctx: { prisma: PrismaClient }
      ) => {
        const res = await ctx.prisma.book.findUnique({
          where: { id: args.id },
          include: { userBookLog: true },
        });
        return res;
      },
    });
  },
});
