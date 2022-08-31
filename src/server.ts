import dotenv from "dotenv";
dotenv.config()

import express, {Application, Express, NextFunction, Request, Response} from 'express'

import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import path from "path";
import {loggerMiddleware} from "./middleware/loggerMiddleware";
import verifyController from "./verification/web/Verify.controller";
import {StatusCodes} from "http-status-codes";


const BASE_UPLOAD_ROUTE_URL:string = process.env.BASE_UPLOAD_ROUTE_URL || '/uploads'
const BASE_UPLOAD_PATH:string = process.env.BASE_UPLOAD_PATH || 'uploads'
const BASE_STATIC_PATH:string = process.env.BASE_STATIC_PATH || 'public'
const PROTOCOL:string = process.env.PROTOCOL || 'http'
const HOSTNAME:string = process.env.HOSTNAME || 'localhost'
const PORT:string = process.env.PORT || '7001'
const REQUEST_TIMEOUT_MSEC:number = Number(process.env.REQUEST_TIMEOUT_MSEC) || 120000000



const appServer:Application = express()
appServer.use(cors())
appServer.use(express.json()) //Used to parse JSON bodies
appServer.use(express.urlencoded({extended: true}))

// app.use(morgan('dev'))
// app.use(trim)
appServer.use(cookieParser())

// request timeout
appServer.use( (req:Request, res:Response, next:NextFunction) => {
  res.setTimeout(REQUEST_TIMEOUT_MSEC);
  next();
});

appServer.use(loggerMiddleware);


const routePrefix = '/api/v1';



appServer.get('/', async (req: Request, res: Response) => {
  return res.status(StatusCodes.OK).json(
      {status: true, message: 'Web3 Backend Up & Running'}
  )
})


appServer.use(`${routePrefix}/verification`, verifyController)



// enable files upload
appServer.use(fileUpload({createParentPath: true}));

appServer.use(express.static( BASE_STATIC_PATH ))
appServer.use(BASE_UPLOAD_ROUTE_URL, express.static(BASE_UPLOAD_PATH))
appServer.use(BASE_UPLOAD_ROUTE_URL, express.static(path.join(__dirname, BASE_UPLOAD_PATH)))


appServer.listen(PORT, async () => {
  console.log(
      `Server running at ${PROTOCOL}://${HOSTNAME}:${PORT}`
  )
})


// export default appServer;