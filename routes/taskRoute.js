import { Router } from "express";
import taskValidation from "../middleware/taskValidation.js";
import {
  getTasks,
  getTaskById,
  createTask,
  createTaskHandler,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.route("/")
  .get(getTasks)
  .post(taskValidation, createTask, createTaskHandler);

taskRouter.route("/:taskId")
  .get(getTaskById)
  .put(taskValidation, updateTask)
  .delete(deleteTask);

export default taskRouter;
