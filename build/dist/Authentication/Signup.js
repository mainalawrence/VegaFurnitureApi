"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const configaration_1 = __importDefault(require("../Database/configaration"));
const signUp = async (req, res) => {
    const { id, name, email, password } = req.body;
    let firstName = name.splite(' ')[0];
    let lastName = name.splite(' ')[1];
    let image = '';
    try {
        let encpassword = await bcrypt_1.default.hash(password, 10);
        const result = await configaration_1.default.query("select * from users where email=$", email);
        res.json(result);
    }
    catch (error) {
        console.log({ message: error });
        res.status(300).json({ Error: error });
    }
};
exports.signUp = signUp;
