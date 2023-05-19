"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsHandler_1 = require("../handlers/productsHandler");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get("/", productsHandler_1.getAllProducts);
router.get("/:id", productsHandler_1.getOneProduct);
router.post("/", productsHandler_1.InsertProduct);
router.put("/:id", productsHandler_1.updateProduct);
router.delete("/:id", productsHandler_1.deleteProduct);
exports.default = router;
