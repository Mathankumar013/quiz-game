const { ApolloServer } = require('apollo-server');
const typeDefs = require('./Module/typeDefs');
const resolvers = require('./Module/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000,() => {
  console.log("🚀 Server ready");
});
