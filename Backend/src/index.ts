import express ,{Request,Response}from "express";
import user from "./api/user/main";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();
const app=express();
const PORT =process.env.PORT;
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, HEAD, OPTIONS, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
    22
});
// Middleware for parsing request bodies
app.use(express.json());
app.use("api/user",user);
console.log(PORT);
app.get('/',(req:Request,res:Response)=>{
    try{
        return res.json({message:"Hello World"})
    }
    catch(e){
        return res.status(500).json({message:e})
    }
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});