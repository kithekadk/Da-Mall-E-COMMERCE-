import { Response } from "express";
import { CustomUser } from "../interfaces/userInterface";
import mssql, { RequestError } from 'mssql'
import { sqlConfig } from "../config/config";

export const newUser = async(req:CustomUser, res:Response)=>{
    try {
        let {EMAIL, FIRSTNAME,LASTNAME, PASSWORD, CONFIRM_PWD} = req.body
        
        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input ('EMAIL', mssql.VarChar, EMAIL)
        .input ('FIRSTNAME', mssql.VarChar, FIRSTNAME)
        .input ('LASTNAME', mssql.VarChar, LASTNAME)
        .input ('PASSWORD', mssql.VarChar, PASSWORD)
        .input ('CONFIRM_PWD', mssql.VarChar, CONFIRM_PWD)
        .execute('createNewUser');

        return res.json({message: 'User created successfully...'})
        
    } catch (error) {
        if(error instanceof RequestError){
            res.json({
                message: error.message
            })
        }
    }
}