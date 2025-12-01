// const db = require("../db/queries.js")

// GET new message form

async function newMessageGet(req, res) {
  res.render("newMessage");
}
// POST new message

// POST delete message (admins only)

// GET logout

module.exports = { newMessageGet };
