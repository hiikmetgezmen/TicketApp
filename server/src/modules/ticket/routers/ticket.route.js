import controller from "../controllers/ticket.controller.js";
import express from "express";
import {
  requiredAuthMiddleware,
} from "../../../middlewares/auth.middleware.js";
const router = express.Router();

router
  .route("/")
  .post(requiredAuthMiddleware,controller.takeTicketRequest);

  router
  .route("/all")
  .post(requiredAuthMiddleware, controller.getAll);

 

 


  export default router;
