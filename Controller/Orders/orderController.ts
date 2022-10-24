import { Request, RequestHandler, Response } from "express"
import sqlconnection from '../../Database/configaration'

import { uid } from "uid";

export const getOrders: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await sqlconnection.query("SELECT * FROM orders where active=1;");
        res.json(result.rows)
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}

export const getOrdersDetails: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await sqlconnection.query("SELECT * FROM orderdetails;");
        res.json(result.rows)
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const getOrdersnOrdersDetails: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await sqlconnection.query(`SELECT * FROM orders
        join orderdetails d on d.uid=orders.orderdetailuid 
        join users us on us.uid=userid where orders.active=1;`);
        res.json(result.rows)
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const setOrders: RequestHandler = async (req: Request, res: Response) => {
    const { TotalCost, amount, userid, paymentDetails, order } = req.body;

    try {
        const orderDetailsUID = uid(64);
        const Ordersderdetails = await sqlconnection.query(`insert into orderdetails VALUES(1,'${orderDetailsUID}','${JSON.stringify(order)}')`);
        if (Ordersderdetails.rowCount > 0) {
            const result = await sqlconnection.query(`insert into orders VALUES(1,
                '${uid(64)}',${amount},${TotalCost},0,1,'${userid}','${orderDetailsUID}')`);
            res.json(result.rows)
        }
        else {

            res.json({ Error: "internal error occured" });
        }

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}

export const UpdateOrders: RequestHandler = async (req: Request, res: Response) => {
    const { TotalCost, orders, userid } = req.body;
    try {

    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const deleteOrders: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await sqlconnection.query(`SELECT * FROM`);
        res.json(result.rows);
    }
    catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const orderdelivered: RequestHandler = async (req: Request, res: Response) => {
    try {
        const result = await sqlconnection.query(`UPDATE orders SET derivered=1 and active=0`);
        res.json(result.rows);
    }
    catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}
export const filterOrders: RequestHandler = async (req: Request, res: Response) => {
    try {
        const search = req.params.search.toLocaleLowerCase();
        const result = await sqlconnection.query(`SELECT * FROM furnitures where type like '%${search}%' or name like '%${search}%' and active=1`);
        res.json(result.rows);
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }
}
export const searchOrders: RequestHandler = async (req: Request, res: Response) => {
    try {
        const search = req.params.search.toLocaleLowerCase();
        const result = await sqlconnection.query(`SELECT * FROM orders where type like '%${search}%' or name like '%${search}%' and active=1`);
        res.json(result.rows);
    } catch (error: any) {
        return res.json({ message: "Internal Error", error: error.message })
    }

}