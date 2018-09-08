import { importSchema } from "graphql-import";
import { GraphQLServer } from "graphql-yoga";
import * as path from "path";

import { resolvers } from "./resolvers";

export const startSever = async () => {
  const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"));
  const server = new GraphQLServer({ typeDefs, resolvers });
  await server.start();
  console.log("Server is running on localhost:4000");
};

startSever();