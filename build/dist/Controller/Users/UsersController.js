"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeleteUser = exports.RemoveUser = exports.updateUser = exports.setUser = exports.getTrushedUsers = exports.getUsers = void 0;
const mssql_1 = __importDefault(require("mssql"));
const configaration_1 = __importDefault(require("../../Database/configaration"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const uid_1 = require("uid");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .execute('getUsers');
        return res.json(result.recordset);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.getUsers = getUsers;
const getTrushedUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .execute('trushedUsers');
        return res.json(result.recordset);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.getTrushedUsers = getTrushedUsers;
const setUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    let image = '';
    try {
        let encpassword = yield bcrypt_1.default.hash(password, 10);
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
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
});
exports.setUser = setUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, role } = req.body;
    let image = '';
    try {
        let encpassword = yield bcrypt_1.default.hash(password, 10);
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
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
});
exports.updateUser = updateUser;
const RemoveUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
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
});
exports.RemoveUser = RemoveUser;
const softDeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
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
});
exports.softDeleteUser = softDeleteUser;
