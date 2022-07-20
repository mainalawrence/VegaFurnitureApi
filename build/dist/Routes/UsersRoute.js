"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_1 = __importDefault(require("../Authentication/Auth"));
const UsersController_1 = require("../Controller/Users/UsersController");
const router = express_1.default.Router();
router.get('/users', (0, Auth_1.default)(), UsersController_1.getUsers);
router.get('/trush/users/', (0, Auth_1.default)(), UsersController_1.getTrushedUsers);
router.post('/users', UsersController_1.setUser);
router.put('/users/:id', (0, Auth_1.default)(), UsersController_1.updateUser);
router.delete('/users/soft/:id', (0, Auth_1.default)(), UsersController_1.softDeleteUser);
router.delete('/users/:id', (0, Auth_1.default)(), UsersController_1.RemoveUser);
exports.default = router;
