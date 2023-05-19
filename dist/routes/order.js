"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordersHandler_1 = require("../handlers/ordersHandler");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get("/", ordersHandler_1.getAllOrders);
router.get("/:id", ordersHandler_1.getOneOrder);
router.post("/", ordersHandler_1.InsertOrder);
router.put("/:id", ordersHandler_1.updateOrder);
router.delete("/:id", ordersHandler_1.deleteOrder);
exports.default = router;
