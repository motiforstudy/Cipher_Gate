import express from "express";
import bcrypt from "bcrypt";

const decodeMassageRouter = express();

decodeMassageRouter.post("/", async (req, res)=>{
    try{
        const getBody = req.body;
        console.log(getBody);
        let sumAll = 0;
        let tempNum = 0;
        for(let number of getBody["message"]){
            if (number > tempNum){
                tempNum = number;
                sumAll += number
            } else {
                return res.send(1);
            };
        };
        res.send(sumAll)
    }catch (error){
        res.send(`the problem is in decode-message: ${error}`);
    };
});

export default decodeMassageRouter;