import {NextFunction, Request, Response} from "express";
import logger from "../common/Logger";

export const loggerMiddleware = (request: Request, response: Response, next:NextFunction) => {
  console.log(`${request.method} ${request.path}  ${JSON.stringify(request.body)}`);

  logger.debug("LogLevel.DEBUG", "Hello how aer you")

  next();
}
