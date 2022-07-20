 import  {Request,RequestHandler,Response}  from "express"

import sql from 'mssql'
import bycrypt from 'bcrypt'

import sqlConfig from "../Database/configaration"
export const signUp:RequestHandler=async(req:Request,res:Response)=>{
        const{id,name,email,password}=req.body 
        let firstName=name.splite(' ')[0];
        let lastName=name.splite(' ')[1];
        let image:string='';   
    try {
        let encpassword= await bycrypt.hash(password,10);
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id', sql.VarChar,id)
        .input( 'firstName', sql.VarChar,firstName)
        .input("lastName",sql.VarChar,lastName)
        .input('email', sql.VarChar,email)
        .input('password', sql.VarChar,encpassword)
        .input('image', sql.VarChar,image)
        .execute('createUser');
        res.json(result);
    } catch (error) {
        console.log({message:error});  
        res.status(300).json({Error:error})
    }
}