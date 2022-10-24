"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProducts = exports.filterProducts = exports.softDeleteProducts = exports.deleteProducts = exports.UpdateProducts = exports.setProducts = exports.getProducts = void 0;
const uid_1 = require("uid");
const configaration_1 = __importDefault(require("../../Database/configaration"));
const getProducts = async (req, res) => {
    try {
        const result = await configaration_1.default.query("SELECT * FROM furnitures where active=1;");
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.getProducts = getProducts;
const setProducts = async (req, res) => {
    const { name, cost, type, color, measurement, deriveryTime } = JSON.parse(req.body.data);
    try {
        let imagesNames = [];
        const files = req.files;
        for (let i = 0; i < 3; i++) {
            // imagesNames.push(files[i].filename);
        }
        const result = await configaration_1.default.query(`insert into furnitures values(1,'${(0, uid_1.uid)(64)}','${name}',
        '${type}','${color}',${cost},'${measurement}',now(),'${JSON.stringify(imagesNames)}',1)`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.setProducts = setProducts;
const UpdateProducts = async (req, res) => {
    const { name, cost, type, color, measurement, deriveryTime } = JSON.parse(req.body.data);
    try {
        let imagesNames = [];
        const files = req.files;
        for (let i = 0; i < 3; i++) {
            // imagesNames.push(files[i].filename);
        }
        const result = await configaration_1.default.query(`update  furnitures set name='${name}',
        type='${type}',color='${color}',cost=${cost},measurement='${measurement}',pictures='${JSON.stringify(imagesNames)}' where uid='${req.params.id}'`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.UpdateProducts = UpdateProducts;
const deleteProducts = async (req, res) => {
    try {
        const result = await configaration_1.default.query(`DELETE FROM furnitures where uid='${req.params.id}'`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.deleteProducts = deleteProducts;
const softDeleteProducts = async (req, res) => {
    try {
        const result = await configaration_1.default.query(`update furnitures set active=0 where uid='${req.params.id}'`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.softDeleteProducts = softDeleteProducts;
const filterProducts = async (req, res) => {
    try {
        const result = await configaration_1.default.query(`SELECT * FROM furnitures where active=1 and type='${req.params.filter}';`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.filterProducts = filterProducts;
const searchProducts = async (req, res) => {
    try {
        const search = req.params.search.toLocaleLowerCase();
        const result = await configaration_1.default.query(`SELECT * FROM furnitures where type like '%${search}%' or name like '%${search}%' and active=1`);
        res.json(result.rows);
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.searchProducts = searchProducts;
