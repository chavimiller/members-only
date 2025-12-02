// const db = require("../db/queries.js")
const { body, validationResult } = require("express-validator");

const alphaErr = "must only contain letters.";
// const lengthErrFirst = "must be between 1 and 30 characters";
// const lengthErrLast = "must be between 1 and 75 characters";
// const userNameErr = "must be between 3 and 15 characters";

const validateUser = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name is required.")
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 30 })
    .withMessage("First name must be between 1 and 30 characters"),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required.")
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 75 })
    .withMessage("Last name must be between 1 and 75 characters"),
  body("userName")
    .trim()
    .notEmpty()
    .withMessage("Username is required.")
    .isLength({ min: 3, max: 15 })
    .withMessage("Username must be between 3 and 15 characters"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required.")
    .custom((value) => {
      const hasLetter = /[A-Za-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecial = /[^A-Za-z0-9]/.test(value);

      if (!hasLetter) {
        throw new Error("Password must contain at least one letter.");
      }

      if (!hasNumber) {
        throw new Error("Password must contain at least one number");
      }

      if (hasSpecial) {
        throw new Error("Password cannot contain special characters.");
      }

      return true;
    }),
  body("confirmpass")
    .notEmpty()
    .withMessage("Please confirm your password.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    }),
];

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
