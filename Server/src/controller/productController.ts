import { request, Request, Response } from "express";
import { CustomProduct } from "../interfaces/productInterfaces";
import mssql, { RequestError, VarChar } from 'mssql'
import { sqlConfig } from "../config/config";


export const createProduct= async(req:CustomProduct, res:Response)=>{
    try {
        let {TITLE, PRICE, DESCRIPTION, CATEGORY, IMAGE, QUANTITY, RATING}= req.body

        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input('TITLE', mssql.VarChar, TITLE)
        .input('PRICE', mssql.Numeric, PRICE)
        .input('DESCRIPTION', mssql.VarChar, DESCRIPTION)
        .input('CATEGORY', mssql.VarChar, CATEGORY)
        .input('IMAGE', mssql.VarChar, IMAGE)
        .input('QUANTITY', mssql.Numeric, QUANTITY)
        .execute('AddProduct')

        return res.json({message: "Product added successfully"})
    } catch (error) {
        if(error instanceof RequestError){
            res.status(500).json({
                message: error.message
            })
        }   
    }
}

export const getProducts= async(req: CustomProduct, res:Response)=>{
    try {
        const pool= await mssql.connect(sqlConfig)

        const products = (await pool.request()
        .execute('getProducts')).recordset

        return res.json(products)
    } catch (error) {
        
    }
}

export const deleteProduct = async (req: CustomProduct, res:Response)=>{
    try {
        let {ID}=req.body
        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input('ID', mssql.VarChar, ID)
        .execute('deleteProduct')

        return res.json({message: "Product deleted successfully"})
    } catch (error) {
        console.log(error);
        
    }
}