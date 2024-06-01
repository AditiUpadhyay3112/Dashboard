import express from "express";
import router from "./src/Routes/UserRoute.js";
import { dbConnection } from "./src/DB/DBConnection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import taskRouter from "./src/Routes/TaskRoutes.js";
import feedbackRouter from "./src/Routes/FeedbackRoutes.js";
import adminRouter from "./src/Routes/AdminRoutes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server is created");
});

app.use("/admin", adminRouter);
app.use("/feedback", feedbackRouter);
app.use("/task", taskRouter);
app.use("/api", router);

dbConnection();

// PORT
const port = 3000;
app.listen(port, (req, res) => {
  console.log(`Server is Running on ${port} Number`);
});
