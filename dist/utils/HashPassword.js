"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareHash = exports.generateHash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateHash = (password) => {
    return bcrypt_1.default.hashSync(password + process.env.HASH_PASSWORD_KEY, Number(process.env.SALT_ROUNDS));
};
exports.generateHash = generateHash;
const compareHash = (password, hash) => {
    return bcrypt_1.default.compareSync(password + process.env.HASH_PASSWORD_KEY, hash);
};
exports.compareHash = compareHash;
