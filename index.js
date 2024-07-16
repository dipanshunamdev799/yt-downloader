//required modules
const express = require("express");
const app = express();
const path = require('node:path');
const port = 8080;
app.listen(port, () => {
  console.log(`Server active at http://localhost:${port}`);
});
app.set("title", "Ymate")
app.set("view engine", "ejs");

//Routing
const serverRouter = require("./routes/server");
app.use("/",serverRouter);