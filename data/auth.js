import Mongoose from 'mongoose';
import { useVirtualId } from '../db/database.js';

const userSchema = new Mongoose.Schema({
    username : {type : String, require: true},
    name : {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    url: String
});

useVirtualId(userSchema);

const User = Mongoose.model('User', userSchema) // Users 컬렉션에 userSchema 형태로 데이터


// // 아이디(username) 중복검사
export async function findByUsername(username){
    return User.findOne({username});
}

// id 중복검사
export async function findById(id){
    return User.findById(id);
}

export async function createUser(user){
   return new User(user).save().then((data) => data.id); // User객체 생성 하고 입력받은 user객체 값을 넣고 저장
};

// // export async function login(username){
// //     return db.execute('select username, password from users where username = ?',[username]).then((result) => {console.log(result);
// //         return result;
    
// //     });
// // };

function mapOtionalUser(user){
    return user ? { ...user, id : user._id.toString()} : user;
}