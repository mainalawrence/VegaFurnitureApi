import { Request, RequestHandler, Response } from "express"
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sqlconnection from '../Database/configaration'


export const login: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await sqlconnection.query(`SELECT * FROM users where email='${email}'`)

        if (!result) {
            res.json({ message: "wrong username or password" })
        }

        await bycrypt.compare(password, result.rows[0].password, (error, data) => {
            if (error) {
                res.json({ Error: error });
            }
            if (data) {
                const { id, firstName, lastName, email } = result.rows[0]
                const token = jwt.sign({ id, firstName, lastName, email }, process.env.SECREATE as string, { expiresIn: '1d' });
                res.json({ role: result.rows[0].role, uid: result.rows[0].uid, email: result.rows[0].email, name: result.rows[0].firstname, token })
            }
            else {
                res.json({ Message: "Invalid Username or Password" })
            }
        })
    } catch (error: any) {

        res.json({ message: "Internal Error" })
    }
}

export const LoginWithFacebook: RequestHandler = (req: Request, res: Response) => {
    res.json(req)

}
export const LoginWithGoogle: RequestHandler = (req: Request, res: Response) => {
    res.json(req)
}

