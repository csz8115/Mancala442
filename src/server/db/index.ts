`use server`
import mongoose, { type Mongoose } from "mongoose";
import { type User } from "../../types/user";
import { ObjectId } from "mongodb";

async function modifyUser(userID: ObjectId, user : User) : User {
    try {
        const db: Mongoose = await mongoose.connect(`${process.env.MONGO_URI}`, {
        });
        console.log(`MongoDB connected: ${db.connection.host}`);

    } catch(err) {
    }
}

export default modifyUser;