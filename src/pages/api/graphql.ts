import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import Cors from "micro-cors";
import { schema } from "../../../server/schema";

const cors = Cors();

export const prisma = new PrismaClient();

const server = new ApolloServer({
  schema,
  context: () => ({ prisma }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

const serverLaunch = async (req: MicroRequest, res: ServerResponse) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
};

export default cors(serverLaunch);
