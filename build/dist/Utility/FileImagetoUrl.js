"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagestoUrl = exports.imagetoUrl = void 0;
const fs_1 = __importDefault(require("fs"));
const imagetoUrl = (image) => {
    //return image;
    return fs_1.default.readFileSync(`${image}`, 'base64');
};
exports.imagetoUrl = imagetoUrl;
const imagestoUrl = (images) => {
    let urls = [];
    urls = images.map(image => {
        return fs_1.default.readFileSync(`${image}`, 'base64');
    });
};
exports.imagestoUrl = imagestoUrl;
