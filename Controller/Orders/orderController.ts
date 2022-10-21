import  {Request,RequestHandler,Response}  from "express"
import sqlconnection from '../../Database/configaration'

import { uid } from "uid";

 export const getOrders:RequestHandler=async (req:Request,res:Response)=>{
     try {
     
     }catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const setOrders:RequestHandler=async (req:Request,res:Response)=>{
      const{TotalCost,orders,userid,paymentDetails}=req.body;
     try {
      
     }catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const UpdateOrders:RequestHandler=async (req:Request,res:Response)=>{
    const{TotalCost,orders,userid}=req.body;
     try {
       
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const deleteOrders:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } 
     catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const filterOrders:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }
 }
  export const searchOrders:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }