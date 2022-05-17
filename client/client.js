const express = require("express");
const path = require("path");

const app = express();

app.use("/src", express.static(__dirname + "/" + "src"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/" + "index.html"));
});

app.listen(8080, () => console.log("Server is listening  on port 8080"));
