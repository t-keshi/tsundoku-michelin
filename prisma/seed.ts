import { PrismaClient } from "@prisma/client";
import { accountData } from "./data/accountData";
import { bookData } from "./data/bookData";

const prisma = new PrismaClient();

const resetDB = async () => {
  await prisma.book.deleteMany();
  await prisma.bookLog.deleteMany();
  await prisma.bookContent.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();
};

const setUpUser = async () => {
  await prisma.account.create({
    data: accountData[0],
  });
  await prisma.account.create({
    data: accountData[1],
  });
};

const setUpBook = async () => {
  await prisma.book.create({
    data: bookData[0],
  });
  await prisma.book.create({
    data: bookData[1],
  });
};

const load = async () => {
  await resetDB().catch((e) => {
    throw new Error(e);
  });
  await setUpUser().catch((e) => {
    throw new Error(e);
  });
  await setUpBook().catch((e) => {
    throw new Error(e);
  });
  await prisma.$disconnect();
};

load();
