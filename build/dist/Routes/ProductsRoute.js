"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = __importDefault(require("../Authentication/Auth"));
const ProductsControllers_1 = require("../Controller/Products/ProductsControllers");
const ProductImageUpload_1 = require("../Utility/ProductImageUpload");
const router = express_1.default.Router();
router.get('/products', ProductsControllers_1.getProducts);
router.put('/products/:id', (0, Auth_1.default)(), ProductImageUpload_1.upload.array('Product', 4), ProductsControllers_1.UpdateProducts);
router.post('/products', (0, Auth_1.default)(), ProductImageUpload_1.upload.array('Product', 4), ProductsControllers_1.setProducts);
router.post('/products', ProductsControllers_1.filterProducts);
router.post('/products/:name', ProductsControllers_1.searchProducts);
router.delete('/products/soft/:id', (0, Auth_1.default)(), ProductsControllers_1.softDeleteProducts);
router.delete('/products/:id', (0, Auth_1.default)(), ProductsControllers_1.deleteProducts);
exports.default = router;
