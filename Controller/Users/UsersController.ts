import { json, Request, RequestHandler, Response } from "express"
import sqlconnection from '../../Database/configaration'

import bycrypt from 'bcrypt'
import { uid } from 'uid';

export const getUsers: RequestHandler = async (req: Request, res: Response) => {

    try {
        const result = await sqlconnection.query("SELECT * FROM users WHERE active=1;");
        res.json(result.rows);

    } catch (error: any) {
        return res.json({ message: "Internal Error" })
    }

}
export const getTrushedUsers: RequestHandler = async (req: Request, res: Response) => {

    try {
        const result = await sqlconnection.query("SELECT * FROM users WHERE active=0;");
        res.json(result.rows);

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }
}
export const setUser: RequestHandler = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, phone } = req.body


    try {
        let encpassword = await bycrypt.hash(password, 10);
        const result = await sqlconnection.query(`insert into users values(1,'${uid(32)}','${firstName}','${lastName}','${email}','${phone}','${encpassword}',1,0)`);
        res.json(result.rows);

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const updateUser: RequestHandler = async (req: Request, res: Response) => {
    const { firstname, lastname, phone, email, password } = req.body

    const id = req.params.id;
    try {
        let encpassword = await bycrypt.hash(password, 10);
        const result = await sqlconnection.query(`UPDATE users set firstName='${firstname}',
        lastName='${lastname}',email='${email}',phone='${phone}',password='${encpassword}',
        role=0 WHERE uid='${id}'
        `);

        res.json(result.rowCount);
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const RemoveUser: RequestHandler = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const result = await sqlconnection.query(`DELETE from users WHERE uid='${id}';`);
        res.json(result.rows);
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}

export const softDeleteUser: RequestHandler = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const result = await sqlconnection.query(`UPDATE users SET active=0 WHERE uid='${id}';`);
        res.json(result.rows);

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}


