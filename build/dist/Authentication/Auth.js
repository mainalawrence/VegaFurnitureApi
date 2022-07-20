"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const verifyToken = () => {
    return (req, res, next) => {
        let token = req.headers.authorization;
        if (token === '') {
            res.status(401).json("Error Fobiden");
        }
        token = token && token.replace('Bearer ', '');
        return jsonwebtoken_1.default.verify(token, process.env.SECREATE, (jwtErr, decoded) => {
            if (jwtErr) {
                return res.status(401).json("Fobiden");
            }
            if (decoded) {
                return next();
            }
        });
    };
};
exports.default = verifyToken;
