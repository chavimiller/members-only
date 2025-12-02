const db = require("../db/queries.js");
const { validationResult, matchedData } = require("express-validator");

// GET new message form

async function newMessageGet(req, res) {
  res.render("newMessage", {
    errors: [],
    data: {},
  });
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

  const data = matchedData(req);
  await db.insertMessage(data.title, data.message);

  res.redirect("/home");
}

// POST delete message (admins only)

module.exports = { newMessageGet, newMessagePost };
