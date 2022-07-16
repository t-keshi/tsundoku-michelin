import { enumType } from "nexus";

export const BookContentType = enumType({
  name: "type",
  members: ["SECTION", "CHAPTER"],
});
