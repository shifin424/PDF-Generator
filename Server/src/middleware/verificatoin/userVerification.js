import jwt from 'jsonwebtoken';
import ErrorResponse from '../errors/errorResponse.js';

const verifyUserToken = (req, res, next) => {

    const token = req.headers.authorization;
    console.log(token,"<<<<<<<<<<< >>>>>>>")
    if (!token) {
        const error = new Error('No token provided');
        return next(ErrorResponse.unauthorized(error.message));
        // error.statusCode = 401;
        // return next(error);
    }
    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET_KEY, {
            expiresIn: '3d',
        });
        if (decoded) {
            {
                req.user = decoded
                console.log(req.user)
                next();
            }
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
};

export default {
    verifyUserToken
}