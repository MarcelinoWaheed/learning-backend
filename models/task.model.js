import mongoose from "mongoose";

const tasksModel = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Task", tasksModel);