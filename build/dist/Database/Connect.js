"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const configaration_1 = __importDefault(require("./configaration"));
const mssql_1 = __importDefault(require("mssql"));
const dbConnection = () => {
    (async () => {
        try {
            await mssql_1.default.connect(configaration_1.default).then(con => {
                if (con.connected)
                    console.log(`connected to database:${con.connected}`);
            }).catch(err => console.log(err));
        }
        catch (error) {
            console.log("internale Error :" + error.message);
        }
    })();
};
exports.dbConnection = dbConnection;
