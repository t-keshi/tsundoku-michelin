import { Prisma } from "@prisma/client";
import { userIds } from "./fixture";

export const bookData: Prisma.BookCreateInput[] = [
  {
    title:
      "ソフトウェアアーキテクチャの基礎 ―エンジニアリングに基づく体系的アプローチ",
    image:
      "http://books.google.com/books/content?id=DykjPQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    url: "https://www.amazon.co.jp",
    bookLogCount: 1,
    bookshelfCount: 2,
    bookContents: {
      create: [
        {
          index: 1,
          type: "SECTION",
          heading: "アーキテクチャ特性とは何か",
        },
      ],
    },
    bookLogs: {
      create: [
        {
          userId: userIds[0],
          log: `↑この子の名前は"emotion"。
          styled-componentと並んで、最も有名なCSS-in-JSのライブラリの１つです。
          CSS-in-JSとは、JavaScriptを使ってスタイルを書く方法です。CSS-in-JSを使うことにより、CSSにありがちな名前の衝突やスタイルの複雑な優先順位の問題に別れを告げることができます。そして、より宣言的に、より再利用可能な方法でスタイルを記述できます。
          ところで、同じCSS-in-JSであっても人によって使い方は様々です。ある書き方はメンテナンスしやすくしますが、また、ある書き方はemotionのメリットを十分に引き出せません。
          どうせなら、emotionを解き放ちたい...!`,
        },
        {
          userId: userIds[1],
          log: `目は最初に下まで行ってreturnの後に<StatWrapper>と書いてあるのを見ると、一番上のconst StatWrapper = styled('div')...と書いてあるところまで戻ってきます。それからまた下へ行き<StatHeader>と書いてあるのを見つけると、上のconst StatHeader = styled('div')...と書いてあるところに戻って...、と上限運動を繰り返します。
          つまり、この書き方だと、上へ下へと行ったり来たりしながら読む必要があり、あまり直感的な書き方ではないと言えます。
          加えて、コンポーネントの名前をつけるのにも難儀します。上記デザインサンプルのSessionsの文字にあたる箇所は、StatHeaderと呼ぼうか、それとも、StatTitleがいいだろうか。。。そのようなことをいちいち考えるのは、面倒です。`,
        },
      ],
    },
    bookshelfs: {
      create: [
        {
          userId: userIds[0],
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
    bookContents: {
      create: [
        {
          index: 1,
          type: "SECTION",
          heading: "一番わかりやすいIntelliJの使い方",
        },
      ],
    },
    bookLogs: {
      create: [
        {
          userId: userIds[0],
          log: `↑この子の名前は"emotion"。
          styled-componentと並んで、最も有名なCSS-in-JSのライブラリの１つです。
          CSS-in-JSとは、JavaScriptを使ってスタイルを書く方法です。CSS-in-JSを使うことにより、CSSにありがちな名前の衝突やスタイルの複雑な優先順位の問題に別れを告げることができます。そして、より宣言的に、より再利用可能な方法でスタイルを記述できます。
          ところで、同じCSS-in-JSであっても人によって使い方は様々です。ある書き方はメンテナンスしやすくしますが、また、ある書き方はemotionのメリットを十分に引き出せません。
          どうせなら、emotionを解き放ちたい...!`,
        },
        {
          userId: userIds[1],
          log: `目は最初に下まで行ってreturnの後に<StatWrapper>と書いてあるのを見ると、一番上のconst StatWrapper = styled('div')...と書いてあるところまで戻ってきます。それからまた下へ行き<StatHeader>と書いてあるのを見つけると、上のconst StatHeader = styled('div')...と書いてあるところに戻って...、と上限運動を繰り返します。
          つまり、この書き方だと、上へ下へと行ったり来たりしながら読む必要があり、あまり直感的な書き方ではないと言えます。
          加えて、コンポーネントの名前をつけるのにも難儀します。上記デザインサンプルのSessionsの文字にあたる箇所は、StatHeaderと呼ぼうか、それとも、StatTitleがいいだろうか。。。そのようなことをいちいち考えるのは、面倒です。`,
        },
      ],
    },
    bookshelfs: {
      create: [
        {
          userId: userIds[1],
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
    bookContents: {
      create: [
        {
          index: 1,
          type: "CHAPTER",
          heading: "アーキテクチャ特性とは何か",
        },
      ],
    },
    bookLogs: {
      create: [
        {
          userId: userIds[0],
          log: "良き本",
        },
      ],
    },
    bookshelfs: {
      create: [
        {
          userId: userIds[0],
        },
        {
          userId: userIds[1],
        },
      ],
    },
  },
];
