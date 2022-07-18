import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import Cors from "micro-cors";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../../../prisma/prisma";
import { schema } from "../../../server/schema";
import { authOptions } from "./auth/[...nextauth]";

const cors = Cors();

const server = new ApolloServer({
  schema,
  csrfPrevention: true,
  context: async ({ req, res }) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    return { prisma, session };
  },
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
