import express from "express";
import taskRouter from "./routes/taskRoute.js";
import connectMongo from "./config/connectMongo.js";
import "dotenv/config";
import TextStatus from "./utils/httpStatus.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectMongo();

app.use(express.json({ limit: "10kb" }));

app.use("/api/tasks", taskRouter);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
