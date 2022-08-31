import {NextFunction, Request, Response} from "express";

export const loggerMiddleware = (request: Request, response: Response, next:NextFunction) => {
  console.log(`${request.method} ${request.path}  ${JSON.stringify(request.body)}`);
  next();
}
