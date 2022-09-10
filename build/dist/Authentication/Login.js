"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginWithGoogle = exports.LoginWithFacebook = exports.login = void 0;
const mssql_1 = __importDefault(require("mssql"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configaration_1 = __importDefault(require("../Database/configaration"));
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const pool = await mssql_1.default.connect(configaration_1.default);
        const result = await pool.request()
            .input('email', mssql_1.default.VarChar(100), email)
            .execute('login');
        if (!result.recordset[0]) {
            res.json({ message: "wrong username or password" });
        }
        await bcrypt_1.default.compare(password, result.recordset[0].password, (error, data) => {
            if (error) {
                res.json({ Error: error });
            }
            if (data) {
                const { id, firstName, lastName, email } = result.recordset[0];
                const token = jsonwebtoken_1.default.sign({ id, firstName, lastName, email }, process.env.SECREATE, { expiresIn: '1d' });
                res.json({ role: result.recordset[0].role, id: result.recordset[0].id, email: result.recordset[0].email, name: result.recordset[0].firstName, token });
            }
            else {
                res.json({ Message: "Invalid Username or Password" });
            }
        });
    }
    catch (error) {
        console.log({ message: error });
        res.json({ message: "Internal Error", error });
    }
};
exports.login = login;
const LoginWithFacebook = (req, res) => {
    res.json(req);
};
exports.LoginWithFacebook = LoginWithFacebook;
const LoginWithGoogle = (req, res) => {
    res.json(req);
};
exports.LoginWithGoogle = LoginWithGoogle;
