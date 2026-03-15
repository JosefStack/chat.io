import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

import { getAllContacts } from "../controllers/message.controller.js"; 
import { getMessagesByUserId } from "../controllers/message.controller.js"; 
import { sendMessage } from "../controllers/message.controller.js"; 
import { getChatPartners } from "../controllers/message.controller.js"; 
import { arcjetProtection } from "../middleware/arcjet.middleware.js";


const messageRouter = express.Router();

messageRouter.use(arcjetProtection, protectRoute);

messageRouter.get("/contacts", getAllContacts);
messageRouter.get("/chats", getChatPartners);

// route order matters cs, the below dynamic route can capture all get if written first
messageRouter.get("/:id", getMessagesByUserId);
messageRouter.post("/send/:id", sendMessage);




export default messageRouter;