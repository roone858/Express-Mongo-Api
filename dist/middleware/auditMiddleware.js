"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditMiddleware = void 0;
// Import required dependencies
const fs_1 = __importDefault(require("fs"));
// Create Express app
// Define audit middleware function
function auditMiddleware(req, res, next) {
    // Log the incoming request
    const auditLog = `Incoming Request: ${req.method} ${req.originalUrl}\n`;
    // Log the incoming request
    fs_1.default.appendFileSync('audit.log', auditLog, { flag: 'a' });
    // Store the start time of the request
    const startTime = new Date().getTime();
    // Override the res.end method to log the outgoing response
    // When you assign a function to res.end, you are overriding the default implementation of the end method with your own custom function. This allows you to modify the behavior of the response before it is sent back to the client.
    const originalEnd = res.end;
    res.end = function (chunk) {
        // Restore the original res.end method
        // Log the outgoing response
        const responseLog = `Outgoing Response: ${req.method} ${req.originalUrl} ${res.statusCode}\n`;
        fs_1.default.appendFileSync('audit.log', responseLog, { flag: 'a' });
        // Calculate the request duration
        const duration = new Date().getTime() - startTime;
        const durationLog = `Request Duration: ${duration}ms\n`;
        fs_1.default.appendFileSync('audit.log', durationLog, { flag: 'a' });
        // Call the original res.end method
        res.end = originalEnd;
        res.end(chunk);
    };
    next();
}
exports.auditMiddleware = auditMiddleware;
