import { Request } from "express"

export interface CustomUser extends Request{
    body:{
        ID: number
        EMAIL: string
        FIRSTNAME: string
        LASTNAME: string
        PASSWORD: string
        CONFIRM_PWD: string
        ROLE: string
    }
}
