 import  {Request,RequestHandler,Response}  from "express"

import bycrypt from 'bcrypt'
import sqlconnection from '../Database/configaration'

export const signUp:RequestHandler=async(req:Request,res:Response)=>{
        const{id,name,email,password}=req.body 
        let firstName=name.splite(' ')[0];
        let lastName=name.splite(' ')[1];
        let image:string='';   
    try {
        let encpassword= await bycrypt.hash(password,10);
        const result=await sqlconnection.query("select * from users where email=$",email)
        
        res.json(result);
    } catch (error) {
        console.log({message:error});  
        res.status(300).json({Error:error})
    }
}