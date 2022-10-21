"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchOrders = exports.filterOrders = exports.deleteOrders = exports.UpdateOrders = exports.setOrders = exports.getOrders = void 0;
const getOrders = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.getOrders = getOrders;
const setOrders = async (req, res) => {
    const { TotalCost, orders, userid, paymentDetails } = req.body;
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.setOrders = setOrders;
const UpdateOrders = async (req, res) => {
    const { TotalCost, orders, userid } = req.body;
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.UpdateOrders = UpdateOrders;
const deleteOrders = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.deleteOrders = deleteOrders;
const filterOrders = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.filterOrders = filterOrders;
const searchOrders = async (req, res) => {
    try {
    }
    catch (error) {
        return res.json({ message: "Internal Error", error: error.message });
    }
};
exports.searchOrders = searchOrders;
