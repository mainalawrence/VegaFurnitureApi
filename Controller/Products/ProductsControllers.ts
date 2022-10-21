import { json, Request, RequestHandler, Response } from "express"
import sqlConfig from "../../Database/configaration"
import { uid } from 'uid';
import sqlconnection from '../../Database/configaration'



export const getProducts: RequestHandler = async (req: Request, res: Response) => {
    try {


    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
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

export const setProducts = async (req: Request, res: Response) => {

    const { name, cost, brand, category, description, Features, Specifications } = JSON.parse(req.body.data)
    let imagesNames: [] = [];


    try {
        for (let i = 0; i < 3; i++) {
            // imagesNames.push(req.files[i].filename)
        }


    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const UpdateProducts: RequestHandler = async (req: Request, res: Response) => {
    const { name, cost, brand, images, category, description, Features, Specifications } = JSON.parse(req.body.data);
    let imagesNames: [] = [];
    for (let i = 0; i < 3; i++) {
        // imagesNames.push(req.files[i].filename)
    }

    try {



    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const deleteProducts: RequestHandler = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}

export const softDeleteProducts: RequestHandler = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const filterProducts: RequestHandler = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const searchProducts: RequestHandler = async (req: Request, res: Response) => {
    try {


    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}