import express from 'express'
import router from './Routes/UserRoute.js';
import { dbConnection } from './DB/DBConnection.js';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import cors from "cors";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}));

app.get("/", (req, res) => {
    res.send("Server is created")
})

dotenv.config()

app.use("/api", router)

dbConnection();

// PORT
const port = 3000;
app.listen(port, (req, res) => {
    console.log(`Server is Running on ${port} Number`)
})