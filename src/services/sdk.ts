import { GraphQLClient } from "graphql-request";
import { getSdk, getSdkWithHooks } from "../../generated/types";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_API || "");

export const sdkHooks = getSdkWithHooks(client);
export const sdk = getSdk(client);
