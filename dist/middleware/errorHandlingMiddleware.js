"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = void 0;
const errorHandling = (err, req, res) => {
    console.error(err);
    res.status(500);
    res.json({ error: 'Internal Server Error' });
};
exports.errorHandling = errorHandling;
