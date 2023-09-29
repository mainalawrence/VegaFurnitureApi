"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersRoute_1 = __importDefault(require("./UsersRoute"));
const ProductsRoute_1 = __importDefault(require("./ProductsRoute"));
const orderRoute_1 = __importDefault(require("./orderRoute"));
const AuthRoute_1 = __importDefault(require("./AuthRoute"));
const router = express_1.default.Router();
//Main
router.use("/api", UsersRoute_1.default);
router.use("/api", ProductsRoute_1.default);
router.use("/api", orderRoute_1.default);
router.use("/auth", AuthRoute_1.default);
exports.default = router;
