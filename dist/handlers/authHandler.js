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
exports.signUp = exports.signIn = void 0;
const moderatorsModel_1 = __importDefault(require("../models/moderatorsModel"));
const HashPassword_1 = require("../utils/HashPassword");
const generateToken_1 = require("../utils/generateToken");
const moderatorsHandler_1 = require("./moderatorsHandler");
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const mod = yield moderatorsModel_1.default.findOne({ username: username });
    if (!mod)
        return res.json({ message: 'Username not Found' });
    const isPasswordCorrect = (0, HashPassword_1.compareHash)(password, mod.password);
    if (!isPasswordCorrect)
        return res.json({ message: 'Password is  incorrect' });
    const token = (0, generateToken_1.generateToken)(username);
    res.json({ token: token, user: mod.username });
});
exports.signIn = signIn;
exports.signUp = moderatorsHandler_1.InsertModerator;
