"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersHandler_1 = require("../handlers/usersHandler");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get('/', usersHandler_1.getAllUsers);
router.get('/:id', usersHandler_1.getOneUser);
router.post('/', usersHandler_1.InsertUser);
router.put('/:id', usersHandler_1.updateUser);
router.delete('/:id', usersHandler_1.deleteUser);
exports.default = router;
