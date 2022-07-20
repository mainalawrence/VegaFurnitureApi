"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthPassport_1 = __importDefault(require("../Authentication/AuthPassport"));
const passport_1 = __importDefault(require("passport"));
const Login_1 = require("../Authentication/Login");
const Signup_1 = require("../Authentication/Signup");
const router = express_1.default.Router();
router.post('/login', Login_1.login);
router.post('/signup', Signup_1.signUp);
router.get('/google', passport_1.default.authenticate('google', { scope: ['profile'] }));
router.get('/facebook/', passport_1.default.authenticate('facebook'));
router.get('/google/callback', AuthPassport_1.default.authenticate('google', { failureRedirect: 'api/users', session: false }), Login_1.LoginWithGoogle);
router.get('/facebook/callback', AuthPassport_1.default.authenticate('facebook'), Login_1.LoginWithFacebook);
exports.default = router;
