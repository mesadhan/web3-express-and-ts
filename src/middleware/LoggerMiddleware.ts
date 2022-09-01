import {NextFunction, Request, Response} from "express";
import {SLogger} from "../common/SLogger";


export const loggerMiddleware = (request: Request, response: Response, next:NextFunction) => {
  //console.log(`${request.method} ${request.path}  ${JSON.stringify(request.body)}`);
  SLogger.logf(__filename).debug(`${request.method} : ${request.path}  ${JSON.stringify(request.body)}`)
  next();
}
