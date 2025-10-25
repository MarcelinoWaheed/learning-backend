import { tasks } from "../models/task.model.js";
import { validationResult } from "express-validator";

let nextId = tasks.length + 1;

export const getTasks = (req, res) => {
  res.json({ success: true, tasks });
};

export const getTaskById = (req, res) => {
  const taskId = +req.params.taskId;
  const task = tasks.find(t => t.id === taskId);
  if (!task) return res.json({ success: false, message: "Task not found" });
  res.json({ success: true, task });
};

export const createTask = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.json({ success: false, errors: errors.array() });
  next();
};

export const createTaskHandler = (req, res) => {
  const task = {
    id: nextId++,
    title: req.body.title,
    completed: req.body.completed || false
  };
  tasks.push(task);
  res.json({ success: true, task });
};

export const updateTask = (req, res) => {
  const taskId = +req.params.taskId;
  const task = tasks.find(t => t.id === taskId);
  if (!task) return res.json({ success: false, message: "Task not found" });

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.json({ success: true, task });
};

export const deleteTask = (req, res) => {
  const taskId = +req.params.taskId;
  const index = tasks.findIndex(t => t.id === taskId);
  if (index === -1) return res.json({ success: false, message: "Task not found" });

  tasks.splice(index, 1);
  res.json({ success: true, message: "Task deleted successfully", tasks });
};

export const markComplete = (req, res) => {
  const taskId = +req.params.taskId;
  const task = tasks.find(t => t.id === taskId);
  if (!task) return res.json({ success: false, message: "Task not found" });

  task.completed = true;
  res.json({ success: true, task });
};

export const getStats = (req, res) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const incomplete = total - completed;

  res.json({ success: true, total, completed, incomplete });
};
