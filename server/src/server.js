const express = require("express");
const path = require("path");

const app = express();
const cors = require("cors");
app.use(cors());

const users = [
  { id: 1, name: "jhon" },
  { id: 2, name: "harry" },
  { id: 3, name: "gurf" },
];

app.get("/", (req, res) => {
  res.send(users);
});

app.listen(3000, () => console.log("Server is listening  on port 3000"));
