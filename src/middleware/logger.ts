import { Request, Response, NextFunction } from 'express';

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timestamp = new Date().toISOString();
  console.log(
    `REQUEST RECEIVED @ [${timestamp}] ${req.method} ${req.originalUrl}`
  );

  // You must call next() or the request will hang forever!
  next();
};
