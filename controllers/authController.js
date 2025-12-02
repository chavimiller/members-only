const db = require("../db/queries.js");
const { validationResult } = require("express-validator");

// GET sign up form

async function createAccountGet(req, res) {
  res.render("signup");
}

// POST sign up form

async function createAccountPost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("signup", {
      errors: errors.array(),
      data: req.body,
    });
  }

  await db.insertUser(
    req.body.firstName,
    req.body.lastName,
    req.body.username,
    password // Work with hashing and bcrypt
  );

  res.redirect("/login");
}

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
  createAccountPost,
  loginAccountGet,
  memberGet,
  adminGet,
  logout,
};
