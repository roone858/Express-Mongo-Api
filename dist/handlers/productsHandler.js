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
exports.InsertProduct = exports.getOneProduct = exports.getAllProducts = void 0;
const products_model_1 = __importDefault(require("../models/products.model"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_model_1.default.find();
    res.status(201).json(products);
});
exports.getAllProducts = getAllProducts;
const getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_model_1.default.findById(3);
    product === null || product === void 0 ? void 0 : product.title = "product three";
    yield (product === null || product === void 0 ? void 0 : product.save());
    res.status(201).json(product);
});
exports.getOneProduct = getOneProduct;
const InsertProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new products_model_1.default({
        name: "test preoduct",
        price: 66,
        description: "from express app",
    });
    yield product.save();
    res.status(201).json(product);
});
exports.InsertProduct = InsertProduct;
