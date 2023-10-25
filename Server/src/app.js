import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import connectDatabase from './config/database.js';
import userRouter from './routes/userRouter.js';
import errorHandler from "./middleware/errors/errorHandler.js";
import cors from "./middleware/security/cors.js";


const app = express();

app.use(cors)
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

connectDatabase();

app.use("/api/v1/",userRouter)
app.use(errorHandler)

app.use(express.static("public"));
app.use("/pdfFiles", express.static("public/pdfFiles"));

app.use((req,res)=>{
    res.status(400).json({success:false,status:404,message:"Not Found"});
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`The server connection is now established and running on port ${port}`)
})
