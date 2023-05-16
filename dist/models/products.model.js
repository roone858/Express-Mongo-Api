"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },
});
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
