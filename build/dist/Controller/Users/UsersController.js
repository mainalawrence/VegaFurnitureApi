"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeleteUser = exports.RemoveUser = exports.updateUser = exports.setUser = exports.getTrushedUsers = exports.getUsers = void 0;
const configaration_1 = __importDefault(require("../../Database/configaration"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const uid_1 = require("uid");
const getUsers = async (req, res) => {
    try {
        const result = await configaration_1.default.query("SELECT * FROM users WHERE active=1;");
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error" });
    }
};
exports.getUsers = getUsers;
const getTrushedUsers = async (req, res) => {
    try {
        const result = await configaration_1.default.query("SELECT * FROM users WHERE active=0;");
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.getTrushedUsers = getTrushedUsers;
const setUser = async (req, res) => {
    const { name, email, password, phone } = req.body;
    let firstName = name.split(' ')[0];
    let lastName = name.split(' ')[1];
    try {
        let encpassword = await bcrypt_1.default.hash(password, 10);
        const result = await configaration_1.default.query(`insert into users values(1,'${(0, uid_1.uid)(32)}','${firstName}','${lastName}','${email}','${phone}','${encpassword}',1,0)`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.setUser = setUser;
const updateUser = async (req, res) => {
    const { firstname, lastname, phone, email, password } = req.body;
    const id = req.params.id;
    try {
        let encpassword = await bcrypt_1.default.hash(password, 10);
        const result = await configaration_1.default.query(`UPDATE users set firstName='${firstname}',
        lastName='${lastname}',email='${email}',phone='${phone}',password='${encpassword}',
        role=0 WHERE uid='${id}'
        `);
        res.json(result.rowCount);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.updateUser = updateUser;
const RemoveUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await configaration_1.default.query(`DELETE from users WHERE uid='${id}';`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.RemoveUser = RemoveUser;
const softDeleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await configaration_1.default.query(`UPDATE users SET active=0 WHERE uid='${id}';`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.softDeleteUser = softDeleteUser;
