import { Prisma } from "@prisma/client";
import { userId } from "./fixture";

export const accountData: Prisma.AccountCreateInput = {
  type: "oauth",
  provider: "google",
  providerAccountId: "110335118131981724238",
  user: {
    create: {
      id: userId,
      name: "t-keshi",
      email: "takeshi.inoue@gmail.com",
      emailVerified: "1996-12-19T16:39:57-08:00",
      image:
        "http://books.google.com/books/content?id=APq6swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
  },
};
