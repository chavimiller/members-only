const db = require("../db/queries.js");
const { validationResult } = require("express-validator");

// GET new message form

async function newMessageGet(req, res) {
  res.render("newMessage");
}
// POST new message

async function newMessagePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("newMessage", {
      errors: errors.array(),
      data: req.body,
    });
  }
  await db.insertMessage(req.body.title, req.body.message);

  res.redirect("/home");
}

// POST delete message (admins only)

module.exports = { newMessageGet, newMessagePost };
