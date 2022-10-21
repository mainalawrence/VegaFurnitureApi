"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginWithGoogle = exports.LoginWithFacebook = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configaration_1 = __importDefault(require("../Database/configaration"));
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await configaration_1.default.query(`SELECT * FROM users where email='${email}'`);
        if (!result) {
            res.json({ message: "wrong username or password" });
        }
        await bcrypt_1.default.compare(password, result.rows[0].password, (error, data) => {
            if (error) {
                res.json({ Error: error });
            }
            if (data) {
                const { id, firstName, lastName, email } = result.rows[0];
                const token = jsonwebtoken_1.default.sign({ id, firstName, lastName, email }, process.env.SECREATE, { expiresIn: '1d' });
                res.json({ role: result.rows[0].role, id: result.rows[0].id, email: result.rows[0].email, name: result.rows[0].firstName, token });
            }
            else {
                res.json({ Message: "Invalid Username or Password" });
            }
        });
    }
    catch (error) {
        res.json({ message: "Internal Error" });
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
