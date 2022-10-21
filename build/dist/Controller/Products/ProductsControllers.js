"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProducts = exports.filterProducts = exports.softDeleteProducts = exports.deleteProducts = exports.UpdateProducts = exports.setProducts = exports.getProducts = void 0;
const getProducts = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
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
const setProducts = async (req, res) => {
    const { name, cost, brand, category, description, Features, Specifications } = JSON.parse(req.body.data);
    let imagesNames = [];
    try {
        for (let i = 0; i < 3; i++) {
            // imagesNames.push(req.files[i].filename)
        }
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.setProducts = setProducts;
const UpdateProducts = async (req, res) => {
    const { name, cost, brand, images, category, description, Features, Specifications } = JSON.parse(req.body.data);
    let imagesNames = [];
    for (let i = 0; i < 3; i++) {
        // imagesNames.push(req.files[i].filename)
    }
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.UpdateProducts = UpdateProducts;
const deleteProducts = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.deleteProducts = deleteProducts;
const softDeleteProducts = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.softDeleteProducts = softDeleteProducts;
const filterProducts = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.filterProducts = filterProducts;
const searchProducts = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.searchProducts = searchProducts;
