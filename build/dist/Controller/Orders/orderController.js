"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrders = exports.filterOrders = exports.orderdelivered = exports.deleteOrders = exports.UpdateOrders = exports.setOrders = exports.getOrdersnOrdersDetails = exports.getOrdersDetails = exports.getOrders = void 0;
const configaration_1 = __importDefault(require("../../Database/configaration"));
const uid_1 = require("uid");
const getOrders = async (req, res) => {
    try {
        const result = await configaration_1.default.query("SELECT * FROM orders where active=1;");
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.getOrders = getOrders;
const getOrdersDetails = async (req, res) => {
    try {
        const result = await configaration_1.default.query("SELECT * FROM orderdetails;");
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.getOrdersDetails = getOrdersDetails;
const getOrdersnOrdersDetails = async (req, res) => {
    try {
        const result = await configaration_1.default.query(`SELECT * FROM orders
        join orderdetails d on d.uid=orders.orderdetailuid 
        join users us on us.uid=userid where orders.active=1;`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.getOrdersnOrdersDetails = getOrdersnOrdersDetails;
const setOrders = async (req, res) => {
    const { TotalCost, amount, userid, paymentDetails, order } = req.body;
    try {
        const orderDetailsUID = (0, uid_1.uid)(64);
        const Ordersderdetails = await configaration_1.default.query(`insert into orderdetails VALUES(1,'${orderDetailsUID}','${JSON.stringify(order)}')`);
        if (Ordersderdetails.rowCount > 0) {
            const result = await configaration_1.default.query(`insert into orders VALUES(1,
                '${(0, uid_1.uid)(64)}',${amount},${TotalCost},0,1,'${userid}','${orderDetailsUID}')`);
            res.json(result.rows);
        }
        else {
            res.json({ Error: "internal error occured" });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.setOrders = setOrders;
const UpdateOrders = async (req, res) => {
    const { TotalCost, orders, userid } = req.body;
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.UpdateOrders = UpdateOrders;
const deleteOrders = async (req, res) => {
    try {
        const result = await configaration_1.default.query(`SELECT * FROM`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.deleteOrders = deleteOrders;
const orderdelivered = async (req, res) => {
    try {
        const result = await configaration_1.default.query(`UPDATE orders SET derivered=1 and active=0`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.orderdelivered = orderdelivered;
const filterOrders = async (req, res) => {
    try {
        const search = req.params.search.toLocaleLowerCase();
        const result = await configaration_1.default.query(`SELECT * FROM furnitures where type like '%${search}%' or name like '%${search}%' and active=1`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.filterOrders = filterOrders;
const searchOrders = async (req, res) => {
    try {
        const search = req.params.search.toLocaleLowerCase();
        const result = await configaration_1.default.query(`SELECT * FROM orders where type like '%${search}%' or name like '%${search}%' and active=1`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.searchOrders = searchOrders;
