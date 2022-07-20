 import  {Request,RequestHandler,Response}  from "express"
import sql from 'mssql'
import sqlConfig from "../../Database/configaration";
import bycrypt from 'bcrypt'
import { uid } from 'uid';
 
 export const getUsers:RequestHandler =async (req:Request,res:Response)=>{
     
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .execute('getUsers');
        return res.json(result.recordset);
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const getTrushedUsers:RequestHandler =async (req:Request,res:Response)=>{
     
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .execute('trushedUsers');
        return res.json(result.recordset);
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }
 }
 export const setUser:RequestHandler =async (req:Request,res:Response)=>{
        const{firstName,lastName,email,password}=req.body 
        let image:string='';   
    try {
        let encpassword= await bycrypt.hash(password,10);
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id', sql.VarChar,uid(32))
        .input( 'firstName', sql.VarChar,firstName)
        .input("lastName",sql.VarChar,lastName)
        .input('email', sql.VarChar,email)
        .input('password', sql.VarChar,encpassword)
        .input('image', sql.VarChar,image)
        .execute('createUser');
        res.json(result);
    } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
 export const updateUser:RequestHandler =async (req:Request,res:Response)=>{
           const{firstName,lastName,email,password,role}=req.body 
        let image:string='';   
    try {
        let encpassword= await bycrypt.hash(password,10);
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id', sql.VarChar,req.params.id)
        .input( 'firstName', sql.VarChar,firstName)
        .input("lastName",sql.VarChar,lastName)
        .input('email', sql.VarChar,email)
        .input('password', sql.VarChar,encpassword)
        .input('image', sql.VarChar,image)
        .input('role', sql.VarChar,role)
        .execute('updateUser');

        return res.json(result)
        
    } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
export const RemoveUser:RequestHandler =async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id',sql.VarChar,req.params.id)
        .execute('deleteUser')
           if(result.rowsAffected[0]>0){
            res.json({message:'User Deleted Successfully',result});
        }
        else{
            res.json({message:'Invalid User'})
        }
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }

 export const softDeleteUser:RequestHandler =async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id',sql.VarChar,req.params.id)
        .execute('softDelete')
           if(result.rowsAffected[0]>0){
            res.json({message:'User Deleted Successfully',result});
        }
        else{
            res.json({message:'Invalid User'})
        }
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }


