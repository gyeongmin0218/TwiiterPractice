import * as authRepository from '../data/auth.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

const secret = 'abcdefg1234%^&*';

async function makeToken(id){
    const token = jsonwebtoken.sign(
        {
        id: id,
        isAdmin: false},
        secret,
        {expiresIn : "2h"}
    )
}


export async function signup(req, res, next){
    const { username, password, name, email } = req.body;
    const hashed = bcrypt.hashSync(password, 10);
    const users = await authRepository.createUser(username, hashed, name, email);
    if(users){
        res.status(201).json(users);
    }
}

export async function login(req, res, next){
    const { username, password } = req.body;
    const user = await authRepository.login(username);
    
    if(user){
        if(bcrypt.compareSync(password, user.password)){
            res.status(201).header('Token', makeToken(username)).json(`${username}`);
        }else{
            res.status(404).json({ message: `${username} 님 아이디 또는 비밀번호를 확인해주세요` });
        }
    } 
}

// 토큰을 확인해서 로그인 기록이 있는지 확인함
export async function verify(req, res, next){
    const token = req.header['Token'];
    if(token){
        res.status(200).json(token);
    }
}


