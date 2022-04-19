const express = require("express");
const app = express();
const PORT = 6969;
const cors = require("cors");
const userData = require("./MOCK_DATA.json");
const graphql, {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString} = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt},
    firstName: { type: GraphQLString},
    lastName: { type: GraphQLString},
    email: { type: GraphQLString},
    password: { type: GraphQLString},
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    
  }
});
const Mutation = "mutation";

const schama = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});
