import { body } from "express-validator";

const taskValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean value"),
];

export default taskValidation;
