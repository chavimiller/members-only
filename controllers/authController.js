const db = require("../db/queries.js");
const { validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcryptjs");

async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.redirect("/auth/login");
}

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

  res.redirect("/auth/member");
}

// GET login form
async function loginAccountGet(req, res) {
  res.render("login");
}
// Post login form

// GET member form
async function memberGet(req, res) {
  res.render("isMember", { error: req.query.error });
}
// POST member form
async function memberPost(req, res) {
  const secretCode = "123456789";
  const submitCode = req.body.code;

  if (submitCode === secretCode) {
    await db.updateMembershipStatus(req.user.id, true);
    return res.redirect("/home");
  } else {
    return res.redirect("/auth/member?error=wrongCode");
  }
}

// GET admin form
async function adminGet(req, res) {
  res.render("isAdmin", { error: req.query.error });
}
// POST admin form
async function adminPost(req, res) {
  const secretCode = "987654321";
  const submitCode = req.body.code;

  if (submitCode === secretCode) {
    await db.updateAdminStatus(req.user.id, true);
    return res.redirect("/home");
  } else {
    return res.redirect("/auth/admin?error=wrongCode");
  }
}
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
  memberPost,
  adminPost,
  ensureAuthenticated,
};
