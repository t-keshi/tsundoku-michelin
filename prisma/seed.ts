import { PrismaClient } from "@prisma/client";
import { accountData } from "./data/accountData";
import { bookData } from "./data/bookData";

const prisma = new PrismaClient();

const resetDB = async () => {
  await prisma.book.deleteMany();
  await prisma.userBookLog.deleteMany();
  await prisma.bookContent.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();
};

const setUpUser = async () => {
  await prisma.account.create({
    data: accountData,
  });
};

const setUpBook = async () => {
  await prisma.book.create({
    data: bookData[0],
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
