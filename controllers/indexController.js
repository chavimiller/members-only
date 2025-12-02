const db = require("../db/queries.js");

// GET message board - show all messages
async function showAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    user: req.user,
    messages: messages,
  });
}

module.exports = { showAllMessages };
