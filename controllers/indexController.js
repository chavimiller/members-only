const db = require("../db/queries.js");

// GET message board - show all messages
async function showAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    user: req.user,
    messages: messages,
  });
}

// Ensure user is logged in
async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.redirect("/auth/login");
}

module.exports = { showAllMessages, ensureAuthenticated };
