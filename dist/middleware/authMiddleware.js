"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const verifyToken_1 = require("../utils/verifyToken");
const authMiddleware = (req, res, next) => {
    const isValid = (0, verifyToken_1.verifyToken)(req.headers["authorization"]);
    if (isValid)
        return next();
    res.status(401);
    res.json({ error: " Unauthorized" });
};
exports.authMiddleware = authMiddleware;
