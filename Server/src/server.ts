import express, { json, NextFunction, Request, Response } from "express";
import router from "./routes/router";
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())

app.use('/product', router)

app.use((err:Error, req: Request, res: Response, next:NextFunction)=>{
    res.json({message: err.message})
})
app.listen(4300, ()=>{
    console.log("Server listening")
})
