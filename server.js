import express from "express";
import signupRouter from "./routers/signup_router.js";
import verifyRouter from "./routers/verify_router.js";
import decodeMassageRouter from "./routers/decode_message_router.js";

const app = express();
app.use(express.json());

app.use("/signup", signupRouter);
app.use("/verify", verifyRouter);
app.use("/decode-message", decodeMassageRouter)

app.listen(3000, ()=>{
    console.log("the server is ready: ");
})