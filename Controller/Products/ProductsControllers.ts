 import  {json, Request,RequestHandler,Response}  from "express"

import sqlConfig from "../../Database/configaration"
import { uid } from 'uid';
import sql, { MAX } from 'mssql'


 export const getProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
        
         
         const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .execute('getProducts');

        if(result.rowsAffected[0]<0){
            res.json({message:"No users",result})
        }
        res.json(result.recordsets);

     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }

//  interface File_  { 
//  fieldname:string
// 	originalname:string
// 	encoding: string
// 	mimetype: string
// 	destination:string
// 	filename:string
// 	path:string
// 	size:number
//  }

  export const setProducts=async (req:Request, res:Response)=>{

    const {name,cost,brand,category ,description,Features,Specifications } =JSON.parse(req.body.data)
    let imagesNames:[]=[];

       
     try {
    for(let i=0;i<3;i++){
        // imagesNames.push(req.files[i].filename)
    }
       const pool =await sql.connect(sqlConfig);
       const result=await pool.request()
        
        .input('id' ,sql.VarChar(100),uid(32))
        .input('name' ,sql.VarChar(100),name)
        .input('price' ,sql.Float,cost)
        .input('brand' ,sql.VarChar(100),brand)
        .input('images' ,sql.NVarChar(MAX),`${imagesNames}`)
        .input('category' ,sql.VarChar(100),category)
        .input('description', sql.VarChar(100),description)
        .input('features', sql.NVarChar(MAX),`${Features}`)
        .input('specification' ,sql.NVarChar(MAX),`${Specifications}`)
        .execute('createProduct');

        if(result.rowsAffected[0]>0){
            res.json({message:"product created successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }
        const files= req.files as {[filename: string]: Express.Multer.File[]}
        res.json(result);
         
     } catch (error:any){
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const UpdateProducts:RequestHandler=async (req:Request,res:Response)=>{
    const {name,cost,brand,images ,category ,description,Features,Specifications } =JSON.parse(req.body.data);   
        let imagesNames:[]=[];
    for(let i=0;i<3;i++){
        // imagesNames.push(req.files[i].filename)
    }

     try {
        const pool =await sql.connect(sqlConfig);
       const result=await pool.request()
        .input('id' ,sql.VarChar,req.params.id)
        .input('name' ,sql.VarChar(100),name)
        .input('price' ,sql.Float,cost)
        .input('brand' ,sql.VarChar(100),brand)
        .input('images' ,sql.NVarChar(MAX),`${imagesNames}`)
        .input('category' ,sql.VarChar(100),category)
        .input('description', sql.VarChar(100),description)
        .input('features', sql.NVarChar(MAX),`${Features}`)
        .input('specification' ,sql.NVarChar(MAX),`${Specifications}`)
        .execute('updateProduct');


        if(result.rowsAffected[0]>0){
            res.json({message:"Product created successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }
     }catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const deleteProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id' ,sql.VarChar,req.params.id)
        .execute('deleteProduct');
          if(result.rowsAffected[0]>0){
            res.json({message:"Product created successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }

   export const softDeleteProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('id' ,sql.VarChar,req.params.id)
        .execute('SoftdeleteProduct');
          if(result.rowsAffected[0]>0){
            res.json({message:"Product was deleted successfully",result})
        }
        else{
            res.json({message:"Failed",result})
        }
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const filterProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
         
     } catch (error:any) {
         return res.json({message:"Internal Error",error:error.message})
     }

 }
  export const searchProducts:RequestHandler=async (req:Request,res:Response)=>{
     try {
        const pool =await sql.connect(sqlConfig);
        const result=await pool.request()
        .input('name' ,sql.VarChar,req.params.search)
        .execute('SearchProducts');
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