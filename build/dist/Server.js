"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const Connect_1 = __importDefault(require("./Database/Connect"));
const express_2 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const Routes_1 = __importDefault(require("./Routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, express_2.default)());
//access controller
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('Images'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/static', express_1.default.static(path_1.default.join(__dirname, 'furnitureApp')));
app.get('/api', function (req, res) {
    res.sendFile(`/`, { root: path_1.default.join(__dirname, 'furnitureApp') });
});
app.use("/", Routes_1.default);
//connect to database
try {
    Connect_1.default;
}
catch (error) {
    console.log("Error :" + error.message);
}
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server Listening at port ${port}`);
});
