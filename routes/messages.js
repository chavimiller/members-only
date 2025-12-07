const { Router } = require("express");
const messageController = require("../controllers/messagesController");
const messagesRouter = Router();
const validateMessage = require("../validators/messageValidator");

// get new message form
messagesRouter.get("/new", messageController.newMessageGet);
// post new message

messagesRouter.post("/new", validateMessage, messageController.newMessagePost);

// post delete a message
messagesRouter.post("/delete/:id", messageController.deleteMessage);

// get cancel message
messagesRouter.get("/cancelMessage", messageController.cancelMessage);

module.exports = messagesRouter;
