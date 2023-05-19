"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, String(process.env.TOKEN_SECRET_KEY), (err, decoded) => {
        if (err)
            return false;
        if (decoded)
            return true;
    });
};
exports.verifyToken = verifyToken;
