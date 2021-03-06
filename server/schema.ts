import { makeSchema } from 'nexus';
// eslint-disable-next-line import/no-unresolved
import NexusPrismaScalars from 'nexus-prisma/scalars';
import path from 'path';
import * as AllTypes from './graphql';

export const schema = makeSchema({
  types: [AllTypes, NexusPrismaScalars],
  outputs: {
    schema: path.join(process.cwd(), 'generated/schema.graphql'),
  },
  nonNullDefaults: {
    input: true,
    output: true,
  },
});
