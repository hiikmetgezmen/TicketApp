import express from "express";
import {
  requiredAuthMiddleware,
} from "../../../middlewares/auth.middleware.js";
import { validationResponseMiddleware } from "../../../middlewares/validationResponse.middleware.js";
import controller from "../controllers/user.controller.js";
import { userValidator } from "../validators/userValidator.js";
const router = express.Router();

router
  .route("/")
  .get(requiredAuthMiddleware, controller.getAllRequest)
  .post(userValidator, validationResponseMiddleware, controller.postRequest)
  .patch(controller.updateNotifyTokenByIdRequest);

router
  .route("/profile")
  .get(requiredAuthMiddleware, controller.getByTokenRequest);

router
  .route("/:id")
  .get(controller.getByIdRequest);

  router
  .route("/myTickets")
  .post(controller.getTicketInfo);

  router
  .route("/allTicketInfo")
  .post(controller.getInfo);

  router
  .route("/ticketInfo")
  .post(controller.getTicket);

export default router;
