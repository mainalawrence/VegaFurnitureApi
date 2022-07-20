 import  {Request,RequestHandler,Response}  from "express"
import sql from 'mssql'
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sqlConfig from "../Database/configaration"


 export const login:RequestHandler=async (req:Request,res:Response) => {
   try {
       
       
        const {email,password}=req.body;
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('email',sql.VarChar(100),email)
        .execute('login')

        if(!result.recordset[0]){
            res.json({message:"wrong username or password"})
        }
       
        await bycrypt.compare(password,result.recordset[0].password,(error,data)=>{
           if(error){
               res.json({Error:error});
           }
           if(data){
            const {id,firstName,lastName,email}=result.recordset[0]
            const token =jwt.sign({id,firstName,lastName,email},process.env.SECREATE as string,{ expiresIn: '1d' });
            res.json({role:result.recordset[0].role,id:result.recordset[0].id,email:result.recordset[0].email,name:result.recordset[0].firstName,token})
           }
           else{
               res.json({Message:"Invalid Username or Password"})
           }
       })
    } catch (error) {
        console.log({message:error}); 
        res.json({message:"Internal Error",error})
    }
 }

 export const LoginWithFacebook:RequestHandler=(req:Request,res:Response)=>{
     res.json(req)

 }
export const LoginWithGoogle:RequestHandler=(req:Request,res:Response)=>{
  res.json(req)
  }

