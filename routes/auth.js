const { Router } = require("express");
const authController = require("../controllers/authController");
const authRouter = Router();
const validateUser = require("../validators/signupValidator");
const passport = require("../config/passport");

// get signup page
authRouter.get("/signup", authController.createAccountGet);

// post signup user

authRouter.post("/signup", validateUser, authController.createAccountPost);

// get login page
authRouter.get("/login", authController.loginAccountGet);
// post login user
authRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/auth/login",
    failureMessage: true,
  })
);

// get member page
authRouter.get(
  "/member",
  authController.ensureAuthenticated,
  authController.memberGet
);

// post member auth
authRouter.post("/member", authController.memberPost);
// get admin page
authRouter.get(
  "/admin",
  authController.ensureAuthenticated,
  authController.adminGet
);
// post admin auth
authRouter.post("/admin", authController.adminPost);
// get logout
authRouter.get("/logout", authController.logout);

module.exports = authRouter;
