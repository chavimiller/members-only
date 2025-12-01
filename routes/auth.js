const { Router } = require("express");
const authController = require("../controllers/authController");
const authRouter = Router();

// get signup page
authRouter.get("/", authController.createAccountGet);

// post signup user

// get login page
authRouter.get("/login", authController.loginAccountGet);
// post login user

// get member page
authRouter.get("/member", authController.memberGet);

// post member auth

// get admin page
authRouter.get("/admin", authController.adminGet);
// post admin auth

// get logout
authRouter.get("/logout", authController.logout);

module.exports = authRouter;
