//required modules
const express = require("express");
const app = express();
const port = 8080;

//App parameters
app.listen(port, () => {
  console.log(`Server active at http://localhost:${port}`);
});
app.set("title", "Ymate");
app.set("view engine", "ejs");

//ROUTING
app.get("/", (req, res) => {
  res.render("home");
});
