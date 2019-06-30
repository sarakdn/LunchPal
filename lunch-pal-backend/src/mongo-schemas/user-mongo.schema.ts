import * as mongoose from 'mongoose';


export const UserMongoSchema = new mongoose.Schema({

    first_name:String,
    last_name: String,
    password:String,
    email:String
})

UserMongoSchema.index({"email":1},{unique:true})