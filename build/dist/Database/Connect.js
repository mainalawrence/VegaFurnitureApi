"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const configaration_1 = __importDefault(require("./configaration"));
const mssql_1 = __importDefault(require("mssql"));
const dbConnection = () => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield mssql_1.default.connect(configaration_1.default).then(con => {
                if (con.connected)
                    console.log(`connected to database:${con.connected}`);
            }).catch(err => console.log(err));
        }
        catch (error) {
            console.log("internale Error :" + error.message);
        }
    }))();
};
exports.dbConnection = dbConnection;
