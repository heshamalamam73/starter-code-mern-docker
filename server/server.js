const express = require("express");
const app = express();
const Port = 8080;
const path = require("path")
const bodyParser = require("body-parser");
const postRouter = require("./src/routes/post.router");
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

require("./src/ database");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use("/posts", postRouter);

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function(req, res) {
    res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
});

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});



app.listen(Port, function () {
  console.log(`server listening on port ${Port} `);
});
