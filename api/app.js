const { connectMongoDb } = require("./config/db");
const { authUser } = require("./middlewares/auth"); 
const mongoose = require("mongoose");
const cors = require("cors");
const { json } = require("body-parser");
const express = require("express");
const session = require("express-session");
const parseurl = require("parseurl"); 
const errorMiddleware = require("./middlewares/errors")
const app = express();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(function (req, res, next) {
  if (!req.session.views) {
    req.session.views = {};
  }

  // get the url pathname
  var pathname = parseurl(req).pathname;

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

  next();
});
// All App Routers
const usersRouter = require("./routes/users");
const habitatRouter = require("./routes/habitats");


connectMongoDb();
mongoose.set("toJSON", { virtuals: true });

app.use(cors()); //cors
app.use(json());
app.use(express.static("public"));

const API_PREFIX = "api";

// Opened Routes which doesn't need Authentification token
app.use(`/${API_PREFIX}/users`, usersRouter); 
app.use(`/${API_PREFIX}/habitats`, habitatRouter); 

app.use(errorMiddleware)


module.exports = app;
