const { body } = require("express-validator");

const validateMessage = [
  body("title")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ min: 1, max: 60 })
    .withMessage("Title must be between 1 and 60 characters."),
  body("messageText")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Message is required.")
    .isLength({ min: 1, max: 500 })
    .withMessage("Message must be between 1 and 500 characters"),
];

module.exports = validateMessage;
