const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const messagesRouter = require("./routes/messages");
const path = require("node:path");
const session = require("express-session");
const passport = require("./config/passport");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/auth/signup");
});

app.use("/auth", authRouter);
app.use("/home", indexRouter);
app.use("/message", messagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Listening on port" + PORT);
});
