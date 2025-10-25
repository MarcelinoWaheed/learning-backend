import express from "express";
import taskRouter from "./routes/taskRoute.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
