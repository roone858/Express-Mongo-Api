"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./db");
const product_1 = __importDefault(require("./routes/product"));
const user_1 = __importDefault(require("./routes/user"));
const order_1 = __importDefault(require("./routes/order"));
const moderator_1 = __importDefault(require("./routes/moderator"));
const errorHandlingMiddleware_1 = require("./middleware/errorHandlingMiddleware");
const auditMiddleware_1 = require("./middleware/auditMiddleware");
const authHandler_1 = require("./handlers/authHandler");
const dotenv_1 = __importDefault(require("dotenv"));
const authMiddleware_1 = require("./middleware/authMiddleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT || 4000;
app.use(express_1.default.json());
app.use(auditMiddleware_1.auditMiddleware);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.post('/auth/login', authHandler_1.signIn);
app.post('/auth/signup', authHandler_1.signUp);
app.use('/users', user_1.default);
app.use('/products', product_1.default);
app.use('/orders', order_1.default);
app.use('/moderators', moderator_1.default);
app.use(authMiddleware_1.authMiddleware);
app.get('/checkToken', (req, res) => {
    res.json({ message: 'token is valid' });
});
app.use(errorHandlingMiddleware_1.errorHandling);
app.listen(port, () => {
    console.log('server lessening on port : ', port);
});
exports.default = app;
