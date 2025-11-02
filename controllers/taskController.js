import { Tasks } from "../models/task.model.js";
import { validationResult } from "express-validator";
import TextStatus from "../utils/httpStatus.js";

let nextId = Tasks.length + 1;

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(TextStatus.OK).json({ success: true, tasks });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await Tasks.findById(taskId);
    if (!task) return res.status(TextStatus.NOT_FOUND).json({ success: false, message: "Task not found" });
    res.status(TextStatus.OK).json({ success: true, task });
  } catch (error) {
    console.log(error.message);
  }
};

export const createTask = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(TextStatus.BAD_REQUEST).json({ success: false, errors: errors.array() });
  next();
};

export const createTaskHandler = async (req, res) => {
  try {
    const newtask = await Tasks.create(req.body);
    await newtask.save();
    res.status(TextStatus.CREATED).json({ success: true, newtask });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const updatetask = await Tasks.findByIdAndUpdate(
      taskId,
      { $set: { ...req.body } },
      { new: true } // This tells MongoDB to return the updated document
    );
    if (!updatetask) return res.status(TextStatus.NOT_FOUND).json({ success: false, message: "Task not found" });
    res.status(TextStatus.OK).json({ success: true, updatetask });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const deletetask = await Tasks.findByIdAndDelete(taskId);
    if (!deletetask) res.status(TextStatus.NOT_FOUND).json({ success: false, message: "Task not found" });
    res.status(TextStatus.NO_CONTENT).json({ success: true, message: "Movie deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const markComplete = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findById(taskId);
    if (!task) return res.status(TextStatus.NOT_FOUND).json({ success: false, message: "Task not found" });
    task.completed = true;
    await task.save();
    res.status(TextStatus.OK).json({ success: true, task });
  } catch (error) {
    console.log(error.message);
  }
};

export const getStats = async (req, res) => {
  try 
  {
    const total = await Tasks.countDocuments();
    const completed = await Tasks.countDocuments({ completed: true });
    const incomplete = total - completed;
    res.status(TextStatus.OK).json({ success: true, total, completed, incomplete });
  } catch (error) {
    console.log(error.message);
  }
};
