import * as mongoose from 'mongoose';
import { UserMongoSchema } from './user-mongo.schema';



export const LunchPartySchema = new mongoose.Schema({

    mensa: String,
    maxpals: Number,
    currentpals: Number,
    starttime: Date,
    endtime: Date,
    users: [String],
    interests: [String]
})
