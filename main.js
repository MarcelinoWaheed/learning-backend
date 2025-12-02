import express from "express";
import taskRouter from "./routes/taskRoute.js";
import connectMongo from "./config/connectMongo.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

connectMongo();
app.use(cors());

app.use(express.json({ limit: "10kb" }));

app.use("/api/tasks", taskRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
	return res.status(err.statusCode || 404).json({
		success: err.isSuccess,
		message: err.message,
		code: err.statusCode || 500,
		data: null,
	});
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
