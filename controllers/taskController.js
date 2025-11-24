import { Tasks } from "../models/task.model.js";
import { validationResult } from "express-validator";
import TextStatus from "../utils/httpStatus.js";
import asyncFnWrap from "../middleware/asyncFnWrap.js";
import APIError from "../utils/APIError.js";

let nextId = Tasks.length + 1;

export const getTasks = asyncFnWrap(async (req, res) => {
  const query = req.query;
  const limit = query.limit || 3;
  const page = query.page || 1;
  const skip = (page - 1) * limit;

  const tasks = await Tasks.find().limit(limit).skip(skip);
  res.status(TextStatus.OK).json({ success: true, tasks });
});

export const getTaskById = asyncFnWrap(async (req, res) => {
  const taskId = req.params.taskId;
  const task = await Tasks.findById(taskId);
  if (!task) {
    const error = new APIError.create("Task not found", false, TextStatus.NOT_FOUND);
    return error;
  }
  res.status(TextStatus.OK).json({ success: true, task });
});

export const createTask = (req, res, next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    const error = APIError.create(err.array(), false, TextStatus.BAD_REQUEST);
    return next(error);
  }
  next();
};

export const createTaskHandler = asyncFnWrap(async (req, res) => {
  const newtask = await Tasks.create(req.body);
  await newtask.save();
  res.status(TextStatus.CREATED).json({ success: true, movie: newtask });
});

export const updateTask = asyncFnWrap(async (req, res) => {
  const taskId = req.params.taskId;
  const task = await Movies.findByIdAndUpdate(
    taskId,
    { $set: { ...req.body } },
    { new: true } 
  );
  if (!task) {
    const error = new APIError.create("Task not found", false, TextStatus.NOT_FOUND);
    return next(error);
  }
  return res.status(TextStatus.OK).json({ success: true, task });
});

export const deleteTask = (async (req, res) => {
  const taskId = req.params.taskId;
  const task = await Movies.findByIdAndDelete(taskId);
  if (!task) {
    const error = new APIError.create("Task not found", false, TextStatus.NOT_FOUND);
    return next(error);
  }
  return res.status(TextStatus.OK).json({ success: true, message: "Movie deleted successfully" });
});

