import { asNexusMethod, makeSchema } from "nexus";
import path from "path";
import * as AllTypes from "./graphql";
import { paljs } from "@paljs/nexus";
// @ts-ignore
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";

export const Upload = asNexusMethod(GraphQLUpload, "upload");

export const schema = makeSchema({
  types: [AllTypes, Upload],
  plugins: [paljs()],
  outputs: {
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
  nonNullDefaults: {
    input: true,
    output: true,
  },
});
