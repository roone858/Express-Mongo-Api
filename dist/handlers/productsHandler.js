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
exports.deleteProduct = exports.updateProduct = exports.InsertProduct = exports.getOneProduct = exports.getAllProducts = void 0;
const productsModel_1 = __importDefault(require("../models/productsModel"));
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield productsModel_1.default.find();
        res.status(201).json(products);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllProducts = getAllProducts;
const getOneProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    try {
        const updatedProduct = yield productsModel_1.default.findOne({ _id: productId });
        res.status(201).json(updatedProduct);
    }
    catch (err) {
        next(err);
    }
});
exports.getOneProduct = getOneProduct;
const InsertProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, price } = req.body;
        const product = new productsModel_1.default({ title, description, price });
        yield product.save();
        res.status(201).json(product);
    }
    catch (err) {
        next(err);
    }
});
exports.InsertProduct = InsertProduct;
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { title, description, price } = req.body;
        const product = yield productsModel_1.default.findOneAndUpdate({ _id: id }, { title, description, price }, { new: true });
        res.status(201).json(product);
    }
    catch (err) {
        next(err);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield productsModel_1.default.deleteOne({ _id: id });
        res.status(201).json(product);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteProduct = deleteProduct;
