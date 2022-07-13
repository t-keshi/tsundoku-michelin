import { Prisma } from "@prisma/client";

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
          type: "section",
          heading: "アーキテクチャ特性とは何か",
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
          type: "section",
          heading: "一番わかりやすいIntelliJの使い方",
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
          type: "chapter",
          heading: "アーキテクチャ特性とは何か",
        },
      ],
    },
  },
];
