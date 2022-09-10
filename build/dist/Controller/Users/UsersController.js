"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeleteUser = exports.RemoveUser = exports.updateUser = exports.setUser = exports.getTrushedUsers = exports.getUsers = void 0;
const mssql_1 = __importDefault(require("mssql"));
const configaration_1 = __importDefault(require("../../Database/configaration"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const uid_1 = require("uid");
const getUsers = async (req, res) => {
    try {
        const pool = await mssql_1.default.connect(configaration_1.default);
        const result = await pool.request()
            .execute('getUsers');
        return res.json(result.recordset);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.getUsers = getUsers;
const getTrushedUsers = async (req, res) => {
    try {
        const pool = await mssql_1.default.connect(configaration_1.default);
        const result = await pool.request()
            .execute('trushedUsers');
        return res.json(result.recordset);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.getTrushedUsers = getTrushedUsers;
const setUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    let image = '';
    try {
        let encpassword = await bcrypt_1.default.hash(password, 10);
        const pool = await mssql_1.default.connect(configaration_1.default);
        const result = await pool.request()
            .input('id', mssql_1.default.VarChar, (0, uid_1.uid)(32))
            .input('firstName', mssql_1.default.VarChar, firstName)
            .input("lastName", mssql_1.default.VarChar, lastName)
            .input('email', mssql_1.default.VarChar, email)
            .input('password', mssql_1.default.VarChar, encpassword)
            .input('image', mssql_1.default.VarChar, image)
            .execute('createUser');
        res.json(result);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.setUser = setUser;
const updateUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;
    let image = '';
    try {
        let encpassword = await bcrypt_1.default.hash(password, 10);
        const pool = await mssql_1.default.connect(configaration_1.default);
        const result = await pool.request()
            .input('id', mssql_1.default.VarChar, req.params.id)
            .input('firstName', mssql_1.default.VarChar, firstName)
            .input("lastName", mssql_1.default.VarChar, lastName)
            .input('email', mssql_1.default.VarChar, email)
            .input('password', mssql_1.default.VarChar, encpassword)
            .input('image', mssql_1.default.VarChar, image)
            .input('role', mssql_1.default.VarChar, role)
            .execute('updateUser');
        return res.json(result);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.updateUser = updateUser;
const RemoveUser = async (req, res) => {
    try {
        const pool = await mssql_1.default.connect(configaration_1.default);
        const result = await pool.request()
            .input('id', mssql_1.default.VarChar, req.params.id)
            .execute('deleteUser');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: 'User Deleted Successfully', result });
        }
        else {
            res.json({ message: 'Invalid User' });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.RemoveUser = RemoveUser;
const softDeleteUser = async (req, res) => {
    try {
        const pool = await mssql_1.default.connect(configaration_1.default);
        const result = await pool.request()
            .input('id', mssql_1.default.VarChar, req.params.id)
            .execute('softDelete');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: 'User Deleted Successfully', result });
        }
        else {
            res.json({ message: 'Invalid User' });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.softDeleteUser = softDeleteUser;
