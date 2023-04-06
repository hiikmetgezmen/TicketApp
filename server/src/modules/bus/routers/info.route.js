import controller from "../controllers/info.controller.js";
import express from "express";
import {
  requiredAuthMiddleware,
} from "../../../middlewares/auth.middleware.js";
const router = express.Router();

router
  .route("/")
  .get(requiredAuthMiddleware, controller.getAll);

  router
  .route("/:id")
  .get(requiredAuthMiddleware, controller.getById);

  export default router;
