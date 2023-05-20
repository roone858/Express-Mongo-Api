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
exports.deleteModerator = exports.updateModerator = exports.InsertModerator = exports.getOneModerator = exports.getAllModerators = void 0;
const moderatorsModel_1 = __importDefault(require("../models/moderatorsModel"));
const passwordValidator_1 = require("../utils/passwordValidator");
const HashPassword_1 = require("../utils/HashPassword");
const getAllModerators = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const moderators = yield moderatorsModel_1.default.find();
        res.status(201).json(moderators);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllModerators = getAllModerators;
const getOneModerator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const moderatorId = req.params.id;
    try {
        const updatedModerators = yield moderatorsModel_1.default.findOne({ _id: moderatorId });
        res.status(201).json(updatedModerators);
    }
    catch (err) {
        next(err);
    }
});
exports.getOneModerator = getOneModerator;
const InsertModerator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, role } = req.body;
        if (!(0, passwordValidator_1.passwordValidator)(password))
            return res.status(400).json({ message: 'password not valid' });
        const hash = (0, HashPassword_1.generateHash)(password);
        const moderator = new moderatorsModel_1.default({ username, email, password: hash, role });
        yield moderator.save();
        res.status(201).json(moderator);
    }
    catch (err) {
        next(err);
    }
});
exports.InsertModerator = InsertModerator;
const updateModerator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { username, email, password, role } = req.body;
        const moderator = yield moderatorsModel_1.default.findOneAndUpdate({ _id: id }, { username, email, password, role }, { new: true });
        res.status(201).json(moderator);
    }
    catch (err) {
        next(err);
    }
});
exports.updateModerator = updateModerator;
const deleteModerator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const moderator = yield moderatorsModel_1.default.deleteOne({ _id: id });
        res.status(201).json(moderator);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteModerator = deleteModerator;
