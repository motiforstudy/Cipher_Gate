import express from "express";
import bcrypt from "bcrypt";

const verifyRouter = express();

verifyRouter.post("/", async (req, res)=>{
    try{
        const getBody = req.body;
        console.log(getBody);
        const isMatch = await bcrypt.compare(getBody["password"], "$2b$10$jGuAUFEqia1SsbpCX7swGu1d92PkWLu3dcF/9xNThQfytCdHBcYh2");
        if (isMatch){
            res.send("Verified");
        } else {
            res.send("Unauthorized");
        };
    }catch (error){
        res.send(`the problem is in verify.post: ${error}`);
    };
});

export default verifyRouter;