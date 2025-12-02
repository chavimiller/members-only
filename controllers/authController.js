const db = require("../db/queries.js");
const { validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcryptjs");

async function createAccountGet(req, res) {
  res.render("signup", {
    errors: [],
    data: {},
  });
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
  const data = matchedData(req);
  const hashedPass = await bcrypt.hash(data.password, 10);

  await db.insertUser(data.firstName, data.lastName, data.username, hashedPass);

  res.redirect("/auth/login");
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
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/auth/login");
}

module.exports = {
  createAccountGet,
  createAccountPost,
  loginAccountGet,
  memberGet,
  adminGet,
  logout,
};
