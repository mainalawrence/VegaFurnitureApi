import  {Request,RequestHandler,Response}  from "express"
import sqlConfig from "../../Database/configaration"
import sql, { MAX } from 'mssql'
import { uid } from "uid";

 export const getOrders:RequestHandler=async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()

        .execute('getOrders');

        if(result.rowsAffected[0]<0){
            res.json({message:"No Orders",result})
        }
        res.json(result.recordsets);
     }catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const setOrders:RequestHandler=async (req:Request,res:Response)=>{
      const{TotalCost,orders,userid,paymentDetails}=req.body;
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input("id" ,sql.VarChar(100),uid(32))
        .input("userid", sql.VarChar(100) ,userid)
        .input('TotalCost', sql.Money,TotalCost)
        .input('orders',sql.NVarChar(MAX),orders)
        .input('status',sql.VarChar(100),'progress')
        .input('paymentDetails',sql.NVarChar(MAX),paymentDetails)
        .execute('createOrders');

        if(result.rowsAffected[0]<0){
            res.json({message:"No Orders",result})
        }
        res.json(result.recordsets);
     }catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const UpdateOrders:RequestHandler=async (req:Request,res:Response)=>{
    const{TotalCost,orders,userid}=req.body;
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input("id" ,sql.VarChar(100),req.params.id)
        .input("userid", sql.VarChar(100) ,userid)
        .input('TotalCost', sql.Money,TotalCost)
        .input('orders',sql.NVarChar(),orders)
        .execute('updateOrder');

        if(result.rowsAffected[0]<0){
            res.json({message:"No Orders",result})
        }
        res.json(result.recordsets);      
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const deleteOrders:RequestHandler=async (req:Request,res:Response)=>{
     try {
          const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id',sql.VarChar(100),req.params.id)
        .execute('getProducts');

        if(result.rowsAffected[0]<0){
            res.json({message:"No users",result})
        }
        res.json(result.recordsets);
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
           const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('name' ,sql.VarChar,req.params.search)
        .execute('SearchOrder');
          if(result.rowsAffected[0]>0){
            res.json({message:"Product Search was successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }