import jwt from 'jsonwebtoken';
import * as authRepository from '../data/auth.js';

const AUTH_ERROR = {message : "인증에러"}

export const isAuth = async (req, res, next) =>{
    const authHeader = req.get('Authorization')
    console.log(authHeader);
    if(!(authHeader && authHeader.startsWith('Bearer '))){
        console.log('error1')
        return res.status(401).json(AUTH_ERROR);
    }
    const token = authHeader.split(' ')[1];
        jwt.verify(
        token, 'abcd1234%^&*', async(error, decoded) => {
            if(error){
                console.log('error2')
                return res.status(401).json(AUTH_ERROR);
            }
            const user = await authRepository.findById(decoded.id);
            if(!user){
                console.log('error3');
                return res.stasus(401).json(AUTH_ERROR);
            }
            req.userId = user.id;
            next();
        }
    )
}


// import { validationResult } from "express-validator";

// export const validate = (req, res, next) => {
//     const errors = validationResult(req);
//     if(errors.isEmpty()){
//         return next();
//     }
//     return res.status(400).json({message : errors.array()[0].msg});
// }