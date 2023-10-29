import express from 'express';
import { login, signUp, uploadPDFFile } from '../controllers/userController.js';
import verifyToken from '../middleware/verificatoin/userVerification.js'
import uploadPDF from '../middleware/cloudinary/cloudinary.js';

const userRouter = express.Router();

userRouter.post('/login', login)
userRouter.post('/sign-up', signUp)
userRouter.post('/upload-pdf', verifyToken.verifyUserToken,uploadPDF, uploadPDFFile)

export default userRouter