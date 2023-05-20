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
exports.deleteUser = exports.updateUser = exports.InsertUser = exports.getOneUser = exports.getAllUsers = void 0;
const usersModel_1 = __importDefault(require("../models/usersModel"));
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield usersModel_1.default.find();
        res.status(200).json(users);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
const getOneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        const updatedUser = yield usersModel_1.default.findOne({ _id: userId });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    }
    catch (err) {
        next(err);
    }
});
exports.getOneUser = getOneUser;
const InsertUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, address } = req.body;
        const user = new usersModel_1.default({ username, email, password, address });
        yield user.save();
        res.status(201).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.InsertUser = InsertUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { username, email, password, address } = req.body;
        const user = yield usersModel_1.default.findOneAndUpdate({ _id: id }, { username, email, password, address }, { new: true });
        res.status(201).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield usersModel_1.default.deleteOne({ _id: id });
        if (!user) {
            console.log('User not found');
            return;
        }
        res.status(204).json(user);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteUser = deleteUser;
