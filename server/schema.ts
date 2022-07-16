import { makeSchema } from "nexus";
import path from "path";
import * as AllTypes from "./graphql";
import { paljs } from "@paljs/nexus";

export const schema = makeSchema({
  types: [AllTypes],
  plugins: [paljs()],
  outputs: {
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },
  nonNullDefaults: {
    input: true,
    output: true,
  },
});
