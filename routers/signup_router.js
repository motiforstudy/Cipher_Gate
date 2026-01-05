import express from "express";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import "dotenv/config";

const signupRouter = express();

signupRouter.post("/", async (req, res)=>{
    try{
        const getBody = req.body;
        const hashPassword = await bcrypt.hash(getBody["password"], 10);
        console.log(hashPassword);
        let client = new MongoClient(process.env.URL_TO_MONGO_DB);
        await client.connect();
        const mongoDb = client.db(process.env.DB_NAME_IN_MONGO_DB);
        console.log("MongoDB connected:", mongoDb.databaseName);
        const insertUser = await mongoDb.collection("users").insertOne({"username": getBody["username"], "password": hashPassword})
        res.send("the user insert went successfully")
    } catch (error){
        res.send(`the problem is in signup.post: ${error}`)
    }
});

export default signupRouter