import express from 'express';
import { login , signUp ,uploadPDF } from '../controllers/userController.js';
import upload from '../middleware/multer/multer.js';

const userRouter = express.Router();

userRouter.post('/login',login)
userRouter.post('/sign-up',signUp)
userRouter.post('/upload-pdf',upload.single('pdfFile'),uploadPDF)

export default userRouter