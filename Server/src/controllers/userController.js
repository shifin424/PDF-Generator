import { createUser, findUserByEmail, checkPassword } from "../repositories/userRepository.js";
import ErrorResponse from '../middleware/errors/errorResponse.js';
import jwt from 'jsonwebtoken';




export const signUp = async (req, res, next) => {
    try {
        const { username, email, password } = req.body.data
        const user = await findUserByEmail(email)

        if (user) {
            return res.status(409).json({ error: 'User with this email already exists' });
        } else {
            const userData = {
                username,
                email,
                password,
            };
            const newUser = await createUser(userData);
            const payload = {
                username: newUser.userName,
                email: newUser.email,
                id: newUser._id
            };
            const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' })
            res.status(201).json({ token });
        }
    } catch (error) {
        return next(ErrorResponse.internalError(error.message));
    }
}


export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body.data
        const user = await findUserByEmail(email)
        if (!user) {
            return res.status(404).json({ error: "User not found with this email" });
        }
        const isPasswordValid = await checkPassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Incorrect password" });
        }
        const payload = {
            username: user.userName,
            email: user.email,
            id: user._id,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
        res.status(200).json({ token });
    } catch (error) {
        console.log(error)
        return next(ErrorResponse.internalError(error.message));
    }
}

export const uploadPDF = async (req,res,next) =>{
    try{
        console.log(req.body,1)
        console.log(req.file,2)
    }catch(err){
        console.log(err)
    }
}
