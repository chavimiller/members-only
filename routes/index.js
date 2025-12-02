const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

module.exports = indexRouter;
