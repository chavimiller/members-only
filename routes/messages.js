const { Router } = require("express");
const messageController = require("../controllers/messagesController");
const messagesRouter = Router();

// get new message form
messagesRouter.get("/new", messageController.newMessageGet);
// post new message

// post delete a message

module.exports = messagesRouter;
