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
exports.deleteOrder = exports.updateOrder = exports.pushToOrder = exports.InsertOrder = exports.getOneOrder = exports.getAllOrders = void 0;
const ordersModel_1 = __importDefault(require("../models/ordersModel"));
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield ordersModel_1.default.find();
        res.status(201).json(orders);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllOrders = getAllOrders;
const getOneOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.params.id;
    try {
        const updatedOrder = yield ordersModel_1.default.findOne({ _id: orderId });
        res.status(201).json(updatedOrder);
    }
    catch (err) {
        next(err);
    }
});
exports.getOneOrder = getOneOrder;
const InsertOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, userId } = req.body;
        const order = new ordersModel_1.default({ products: { productId: productId }, userId });
        yield order.save();
        res.status(201).json(order);
    }
    catch (err) {
        next(err);
    }
});
exports.InsertOrder = InsertOrder;
const pushToOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderId = req.params.id;
        const { productId } = req.body;
        const order = yield ordersModel_1.default.findOne({ _id: orderId });
        order === null || order === void 0 ? void 0 : order.products.push({ productId: productId, quantity: 1 });
        res.status(201).json(order);
    }
    catch (err) {
        next(err);
    }
});
exports.pushToOrder = pushToOrder;
const updateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { productId, userId } = req.body;
        const order = yield ordersModel_1.default.findOneAndUpdate({ _id: id }, { productId, userId }, { new: true });
        res.status(201).json(order);
    }
    catch (err) {
        next(err);
    }
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const order = yield ordersModel_1.default.deleteOne({ _id: id });
        res.status(201).json(order);
    }
    catch (err) {
        next(err);
    }
});
exports.deleteOrder = deleteOrder;
