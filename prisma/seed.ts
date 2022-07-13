import { PrismaClient } from "@prisma/client";
import { accountData } from "./data/accountData";
import { bookData } from "./data/bookData";

const prisma = new PrismaClient();

const resetDB = async () => {
  await prisma.book.deleteMany();
};

const setUpUser = async () => {
  await prisma.account.create({
    data: accountData,
  });
};

const setUpBook = async () => {
  await Promise.all(
    bookData.map((data) => {
      prisma.book.create({
        data,
      });
    })
  );
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
