"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moderatorsHandler_1 = require("../handlers/moderatorsHandler");
const router = express_1.default.Router();
router.get('/', moderatorsHandler_1.getAllModerators);
router.get('/:id', moderatorsHandler_1.getOneModerator);
router.post('/', moderatorsHandler_1.InsertModerator);
router.put('/:id', moderatorsHandler_1.updateModerator);
router.delete('/:id', moderatorsHandler_1.deleteModerator);
exports.default = router;
