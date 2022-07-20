"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = __importDefault(require("../Authentication/Auth"));
const orderController_1 = require("../Controller/Orders/orderController");
const router = express_1.default.Router();
router.get('/Orders', (0, Auth_1.default)(), orderController_1.getOrders);
router.put('/Orders/:id', (0, Auth_1.default)(), orderController_1.UpdateOrders);
router.post('/Orders', (0, Auth_1.default)(), orderController_1.setOrders);
router.post('/Orders/:filter', (0, Auth_1.default)(), orderController_1.filterOrders);
router.post('/Orders/:search', (0, Auth_1.default)(), orderController_1.searchOrders);
router.delete('/Orders/:id', (0, Auth_1.default)(), orderController_1.deleteOrders);
exports.default = router;
