const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const messagesRouter = require("./routes/messages");

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/messages", messagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log("Listening on port" + PORT);
});
