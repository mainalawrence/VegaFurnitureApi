"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.searchProducts = exports.filterProducts = exports.softDeleteProducts = exports.deleteProducts = exports.UpdateProducts = exports.setProducts = exports.getProducts = void 0;
const configaration_1 = __importDefault(require("../../Database/configaration"));
const uid_1 = require("uid");
const mssql_1 = __importStar(require("mssql"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .execute('getProducts');
        if (result.rowsAffected[0] < 0) {
            res.json({ message: "No users", result });
        }
        res.json(result.recordsets);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.getProducts = getProducts;
//  interface File_  { 
//  fieldname:string
// 	originalname:string
// 	encoding: string
// 	mimetype: string
// 	destination:string
// 	filename:string
// 	path:string
// 	size:number
//  }
const setProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, cost, brand, category, description, Features, Specifications } = JSON.parse(req.body.data);
    let imagesNames = [];
    try {
        for (let i = 0; i < 3; i++) {
            // imagesNames.push(req.files[i].filename)
        }
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('id', mssql_1.default.VarChar(100), (0, uid_1.uid)(32))
            .input('name', mssql_1.default.VarChar(100), name)
            .input('price', mssql_1.default.Float, cost)
            .input('brand', mssql_1.default.VarChar(100), brand)
            .input('images', mssql_1.default.NVarChar(mssql_1.MAX), `${imagesNames}`)
            .input('category', mssql_1.default.VarChar(100), category)
            .input('description', mssql_1.default.VarChar(100), description)
            .input('features', mssql_1.default.NVarChar(mssql_1.MAX), `${Features}`)
            .input('specification', mssql_1.default.NVarChar(mssql_1.MAX), `${Specifications}`)
            .execute('createProduct');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "product created successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
        const files = req.files;
        res.json(result);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.setProducts = setProducts;
const UpdateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, cost, brand, images, category, description, Features, Specifications } = JSON.parse(req.body.data);
    let imagesNames = [];
    for (let i = 0; i < 3; i++) {
        // imagesNames.push(req.files[i].filename)
    }
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('id', mssql_1.default.VarChar, req.params.id)
            .input('name', mssql_1.default.VarChar(100), name)
            .input('price', mssql_1.default.Float, cost)
            .input('brand', mssql_1.default.VarChar(100), brand)
            .input('images', mssql_1.default.NVarChar(mssql_1.MAX), `${imagesNames}`)
            .input('category', mssql_1.default.VarChar(100), category)
            .input('description', mssql_1.default.VarChar(100), description)
            .input('features', mssql_1.default.NVarChar(mssql_1.MAX), `${Features}`)
            .input('specification', mssql_1.default.NVarChar(mssql_1.MAX), `${Specifications}`)
            .execute('updateProduct');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Product created successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.UpdateProducts = UpdateProducts;
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('id', mssql_1.default.VarChar, req.params.id)
            .execute('deleteProduct');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Product created successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.deleteProducts = deleteProducts;
const softDeleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('id', mssql_1.default.VarChar, req.params.id)
            .execute('SoftdeleteProduct');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Product was deleted successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.softDeleteProducts = softDeleteProducts;
const filterProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.filterProducts = filterProducts;
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(configaration_1.default);
        const result = yield pool.request()
            .input('name', mssql_1.default.VarChar, req.params.search)
            .execute('SearchProducts');
        if (result.rowsAffected[0] > 0) {
            res.json({ message: "Product Search was successfully", result });
        }
        else {
            res.json({ message: "Failed", result });
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
});
exports.searchProducts = searchProducts;
