import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from '../../../generated/types';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_API || '');

export const sdk = getSdkWithHooks(client);
