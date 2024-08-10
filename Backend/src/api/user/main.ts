import express from "express";
import Auth from "./Auth"
 const app=express();
 app.use("/auth",Auth)
 export default app;
 