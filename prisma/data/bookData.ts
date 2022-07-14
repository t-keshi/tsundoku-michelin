import { Prisma } from "@prisma/client";
import { userId } from "./fixture";

export const bookData: Prisma.BookCreateInput[] = [
  {
    title:
      "ソフトウェアアーキテクチャの基礎 ―エンジニアリングに基づく体系的アプローチ",
    image:
      "http://books.google.com/books/content?id=DykjPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    url: "https://www.amazon.co.jp",
    bookLogCount: 1,
    bookshelfCount: 2,
    bookContent: {
      create: [
        {
          index: 1,
          type: "SECTION",
          heading: "アーキテクチャ特性とは何か",
        },
      ],
    },
    userBookLog: {
      create: [
        {
          userId,
          log: "良き本",
        },
      ],
    },
  },
  {
    title: "IntelliJ IDEAハンズオン ――基本操作からプロジェクト管理までマスター",
    image:
      "http://books.google.com/books/content?id=DykjPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    url: "https://www.amazon.co.jp",
    bookLogCount: 1,
    bookshelfCount: 2,
    bookContent: {
      create: [
        {
          index: 1,
          type: "SECTION",
          heading: "一番わかりやすいIntelliJの使い方",
        },
      ],
    },
    userBookLog: {
      create: [
        {
          userId,
          log: "良き本",
        },
      ],
    },
  },
  {
    title: "Effective Kotlin",
    image:
      "http://books.google.com/books/content?id=xpnLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    url: "https://www.amazon.co.jp",
    bookLogCount: 1,
    bookshelfCount: 2,
    bookContent: {
      create: [
        {
          index: 1,
          type: "CHAPTER",
          heading: "アーキテクチャ特性とは何か",
        },
      ],
    },
    userBookLog: {
      create: [
        {
          userId,
          log: "良き本",
        },
      ],
    },
  },
];
