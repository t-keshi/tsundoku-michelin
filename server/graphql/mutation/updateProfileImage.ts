import { Prisma, PrismaClient } from "@prisma/client";
import { arg, extendType, nullable, objectType, stringArg } from "nexus";
import { Storage, CreateBucketRequest } from "@google-cloud/storage";
import { v4 } from "uuid";

export const updateProfileImage = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("image", {
      type: "File",
      args: { image: nullable(arg({ type: "Upload" })) },
      resolve: async (_, __) => {
        return {
          id: "",
          path: "",
          filename: "",
          mimetype: "",
          encoding: "",
        };
      },
    });
  },
});
