import { json, Request, RequestHandler, Response } from "express"
import sqlConfig from "../../Database/configaration"
import { uid } from 'uid';
import sqlconnection from '../../Database/configaration'



export const getProducts: RequestHandler = async (req: Request, res: Response) => {

    try {
        const result = await sqlconnection.query("SELECT * FROM furnitures where active=1;");
        res.json(result.rows);

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}

export const getProduct: RequestHandler = async (req: Request, res: Response) => {

    try {
        const result = await sqlconnection.query(`SELECT * FROM furnitures where active=1 and uid='${req.params.id}';`);
        res.json(result.rows);

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}

interface MulterRequest extends Request {
    file: any;
}
export const setProducts = async (req: Request, res: Response) => {

    const { name, cost, type, color, measurement, deriveryTime } = JSON.parse(req.body.data)


    try {
        let imagesNames: [] = [];
        // const files = req.files as { [filename: string]: Express.Multer.File[] };
    

        for (let i = 0; i < 3; i++) {
            imagesNames.push(files[i].filename);
        }

        const result = await sqlconnection.query(`insert into furnitures values(1,'${uid(64)}','${name}',
        '${type}','${color}',${cost},'${measurement}',now(),'${JSON.stringify(imagesNames)}',1)`);
        res.json(result.rows);


    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const UpdateProducts: RequestHandler = async (req: Request, res: Response) => {
    const { name, cost, type, color, measurement, deriveryTime } = JSON.parse(req.body.data)
    try {

        let imagesNames: [] = [];
        const files = req.files as { [filename: string]: Express.Multer.File[] };

        for (let i = 0; i < 3; i++) {
            // imagesNames.push(files[i].filename);
        }

        const result = await sqlconnection.query(`update  furnitures set name='${name}',
        type='${type}',color='${color}',cost=${cost},measurement='${measurement}',pictures='${JSON.stringify(imagesNames)}' where uid='${req.params.id}'`);
        res.json(result.rows);

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const deleteProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await sqlconnection.query(`DELETE FROM furnitures where uid='${req.params.id}'`);
        res.json(result.rows);
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}

export const softDeleteProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await sqlconnection.query(`update furnitures set active=0 where uid='${req.params.id}'`);
        res.json(result.rows);
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const filterProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await sqlconnection.query(`SELECT * FROM furnitures where active=1 and type='${req.params.filter}';`);
        res.json(result.rows);
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const searchProducts: RequestHandler = async (req: Request, res: Response) => {
    try {
        const search = req.params.search.toLocaleLowerCase();
        const result = await sqlconnection.query(`SELECT * FROM furnitures where type like '%${search}%' or name like '%${search}%' and active=1`);
        res.json(result.rows);
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}