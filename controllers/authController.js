// const db = require("../db/queries.js")

// GET sign up form

async function createAccountGet(req, res) {
  res.render("signup");
}

// POST sign up form

// GET login form
async function loginAccountGet(req, res) {
  res.render("login");
}
// Post login form

// GET member form
async function memberGet(req, res) {
  res.render("isMember");
}
// POST member form

// GET admin form
async function adminGet(req, res) {
  res.render("isAdmin");
}
// POST admin form

// GET logout

async function logout(req, res) {
  res.redirect("/");
}

module.exports = {
  createAccountGet,
  loginAccountGet,
  memberGet,
  adminGet,
  logout,
};
