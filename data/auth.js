import MongoDB from 'mongodb';
import { getUsers } from '../db/database.js';

const ObjectID = MongoDB.ObjectId;


// // 아이디(username) 중복검사
export async function findByUsername(username){
    return getUsers().find({username}).next().then(mapOtionalUser);
}

// id 중복검사
export async function findById(id){
    return getUsers().find({_id: new ObjectID(id)}).next().then(mapOtionalUser);
}

export async function createUser(user){
   return getUsers().insertOne(user).then((result )=> console.log(result.insertedId.toString()));
};

// // export async function login(username){
// //     return db.execute('select username, password from users where username = ?',[username]).then((result) => {console.log(result);
// //         return result;
    
// //     });
// // };

function mapOtionalUser(user){
    return user ? { ...user, id : user._id.toString()} : user;
}