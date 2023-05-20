import { Response, Request, NextFunction as NF } from 'express';
// Import required dependencies
import fs from 'fs';

// Create Express app

// Define audit middleware function
export function auditMiddleware(req: Request, res: Response, next: NF) {
  // Log the incoming request
  const auditLog = `Incoming Request: ${req.method} ${req.originalUrl}\n`;

  // Log the incoming request
  fs.appendFileSync('audit.log', auditLog, { flag: 'a' });

  // Store the start time of the request
  const startTime = new Date().getTime();

  // Override the res.end method to log the outgoing response
  // When you assign a function to res.end, you are overriding the default implementation of the end method with your own custom function. This allows you to modify the behavior of the response before it is sent back to the client.
  const originalEnd = res.end;
  res.end = function (chunk?: any): any {
    // Restore the original res.end method

    // Log the outgoing response
    const responseLog = `Outgoing Response: ${req.method} ${req.originalUrl} ${res.statusCode}\n`;
    fs.appendFileSync('audit.log', responseLog, { flag: 'a' });

    // Calculate the request duration
    const duration = new Date().getTime() - startTime;
    const durationLog = `Request Duration: ${duration}ms\n`;
    fs.appendFileSync('audit.log', durationLog, { flag: 'a' });

    // Call the original res.end method
    res.end = originalEnd;
    res.end(chunk);
  };

  next();
}
