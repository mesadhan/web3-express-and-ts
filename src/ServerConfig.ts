import path from "path";
import dotenv from "dotenv";

import express, {Application} from 'express'
import cors from "cors";
import cookieParser from "cookie-parser";
import {loggerMiddleware} from "./middleware/LoggerMiddleware";
import {SLogger} from "./common/SLogger";



export const serverConfig = ():Application => {

  const serverConfiguration: Application = express()

  const envFilePath: string = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
  // console.log(`Active envFilePath: ${envFilePath}`);
  // SLogger.log.info(`Active envFilePath: ${envFilePath}`)
  SLogger.logf(__filename).info(`Active envFilePath: ${envFilePath}`)
  dotenv.config({path: path.resolve(__dirname, envFilePath)})


  serverConfiguration.use(cors())
  serverConfiguration.use(express.json()) //Used to parse JSON bodies
  serverConfiguration.use(express.urlencoded({extended: true}))
  serverConfiguration.use(cookieParser())


  // middleware
  serverConfiguration.use(loggerMiddleware);
  // app.use(trim)


  return serverConfiguration;
}