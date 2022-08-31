// request timeout
import express, {Application, NextFunction, Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
import verifyController from "./verification/web/Verify.controller";
import fileUpload from "express-fileupload";
import path from "path";
import {appConfig} from "./AppConfig";


const apiGateway: Application = appConfig()


const BASE_UPLOAD_ROUTE_URL: string = process.env.BASE_UPLOAD_ROUTE_URL || '/uploads'
const BASE_UPLOAD_PATH: string = process.env.BASE_UPLOAD_PATH || 'uploads'
const BASE_STATIC_PATH: string = process.env.BASE_STATIC_PATH || 'public'
const REQUEST_TIMEOUT_MSEC: number = Number(process.env.REQUEST_TIMEOUT_MSEC) || 120000000


apiGateway.use((req: Request, res: Response, next: NextFunction) => {
  res.setTimeout(REQUEST_TIMEOUT_MSEC);
  next();
});


const routePrefix = '/api/v1';
apiGateway.get('/', async (req: Request, res: Response) => {
  return res.status(StatusCodes.OK).json(
      {status: true, message: 'Web3 Backend Up & Running'}
  )
})


/************  Here PUT ALL THE API SERVICES ********** */
apiGateway.use(`${routePrefix}/verification`, verifyController)



// enable files upload
apiGateway.use(fileUpload({createParentPath: true}));

apiGateway.use(express.static(BASE_STATIC_PATH))
apiGateway.use(BASE_UPLOAD_ROUTE_URL, express.static(BASE_UPLOAD_PATH))
apiGateway.use(BASE_UPLOAD_ROUTE_URL, express.static(path.join(__dirname, BASE_UPLOAD_PATH)))


export default apiGateway;