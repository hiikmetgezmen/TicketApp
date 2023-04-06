import controller from "../controllers/ticket.controller.js";
import express from "express";
import {
  requiredAuthMiddleware,
} from "../../../middlewares/auth.middleware.js";
const router = express.Router();

router
  .route("/")
  .get(requiredAuthMiddleware, controller.getAll)
  .post(requiredAuthMiddleware,controller.takeTicketRequest );

  router
  .route("/:id")
  .get(requiredAuthMiddleware, controller.getById);


  export default router;
