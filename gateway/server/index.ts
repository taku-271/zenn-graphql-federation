import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
export const config = {
  api: {
    bodyParser: false,
  },
};

const gateway = new ApolloGateway({
  serviceList: [
    { name: "posts", url: "http://localhost:4001" },
    { name: "users", url: "http://localhost:4002" },
  ],
});

const server = new ApolloServer({
  gateway,
});

server.listen({ port: 4010 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
