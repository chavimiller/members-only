// const db = require("../db/queries.js")
const { body, validationResult } = require("express-validator");

const validateMessage = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 1, max: 60 })
    .withMessage("Title must be between 1 and 60 characters."),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ min: 1, max: 500 })
    .withMessage("Message must be between 1 and 500 characters"),
];
// GET new message form

async function newMessageGet(req, res) {
  res.render("newMessage");
}
// POST new message

// POST delete message (admins only)

module.exports = { newMessageGet };
