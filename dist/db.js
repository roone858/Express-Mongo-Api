"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default
    .connect(`mongodb://localhost:27017/${process.env.DATABASE_NAME}`)
    .then(() => console.log(`Connected database successfully : ${process.env.DATABASE_NAME}`))
    .catch((err) => {
    console.log("Connected Fails Error : ", err.message);
});
