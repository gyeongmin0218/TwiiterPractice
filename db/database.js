import { config } from '../config.js';
import Mongoose from 'mongoose';

export async function connectDB(){
    return Mongoose.connect(config.db.host);
}

export function useVirtualId(schema){
    schema.virtual('id').get(function(){ // 스키마에 id를 추가하고
        return this._id.toString();
    });
    schema.set('toJSN', {virtuals:true});
    schema.set('toObject', {virtuals:true});
}
let db;

export function getUsers(){
    return db.collection('users');
}

export function getTweets(){
    return db.collection('tweets');
}

