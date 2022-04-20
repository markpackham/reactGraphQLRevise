const express = require("express");
const app = express();
// we want to visit http://localhost:6969/graphql
const PORT = 6969;
const cors = require("cors");
const userData = require("./MOCK_DATA.json");
const { graphqlHTTP } = require("express-graphql");

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
