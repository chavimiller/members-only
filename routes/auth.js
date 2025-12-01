const { Router } = require("express");
const authController = require("../controllers/authController");
const authRouter = Router();

// get signup page

authRouter.get("/signup", authController.createAccountGet);
// post signup user

// get login page

// post login user

// get member page

// post member auth

// get admin page

// post admin auth

module.exports = authRouter;
