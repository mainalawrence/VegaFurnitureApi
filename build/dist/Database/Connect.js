"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configaration_1 = __importDefault(require("../Database/configaration"));
try {
    const res = configaration_1.default.connect((res) => {
        console.log(`database connected `);
    });
}
catch (error) {
    console.log("Error :" + error.message);
}
exports.default = configaration_1.default;
