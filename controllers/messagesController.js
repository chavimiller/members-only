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
  await db.insertMessage(data.title, data.message, req.user.id);

  res.redirect("/home");
}

// POST delete message (admins only)

async function deleteMessage(req, res) {
  const id = req.params.id;

  await db.deleteMessage(id);
  res.redirect("/home");
}

// GET cancel message
async function cancelMessage(req, res) {
  res.redirect("/home");
}

module.exports = {
  newMessageGet,
  newMessagePost,
  cancelMessage,
  deleteMessage,
};
