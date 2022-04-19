const express = require("express");
const app = express();
const PORT = 6969;
const cors = require("cors");
const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");

app.use(cors());

app.listen(PORT, () => {
  console.log("Server running");
});
