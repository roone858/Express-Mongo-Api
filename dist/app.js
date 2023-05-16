"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./db");
const productsHandler_1 = require("./handlers/productsHandler");
const app = (0, express_1.default)();
app.get("/", productsHandler_1.getOneProduct);
app.listen(4000, () => {
    console.log("server lessining on port : 4000");
});
