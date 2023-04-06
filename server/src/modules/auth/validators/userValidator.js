import { body } from "express-validator";

export const userValidator = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Email must be a valid email")
    .normalizeEmail()
    .toLowerCase(),
  body("password").trim().isLength(2).withMessage("Password is too short"),
  body("age").trim().isLength({ min: 1, max:2}).withMessage("Invalid age."),
  body("phone").trim().isLength(10).isMobilePhone("tr-TR").withMessage("Invalid phone number."),
];
