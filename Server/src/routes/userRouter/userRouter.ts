import { Router } from "express";
import { newUser } from "../../controller/userController";

const userRouter = Router()

userRouter.post('/create', newUser)

export default userRouter