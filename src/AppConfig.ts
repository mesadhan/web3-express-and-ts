import path from "path";
import dotenv from "dotenv";

import express, {Application} from 'express'
import cors from "cors";
import cookieParser from "cookie-parser";
import {loggerMiddleware} from "./middleware/loggerMiddleware";


export const appConfig = ():Application => {

  const expressApplicationConfig: Application = express()

  const envFilePath: string = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
  console.log('Active envFilePath: ', envFilePath);
  dotenv.config({path: path.resolve(__dirname, envFilePath)})


  expressApplicationConfig.use(cors())
  expressApplicationConfig.use(express.json()) //Used to parse JSON bodies
  expressApplicationConfig.use(express.urlencoded({extended: true}))
  expressApplicationConfig.use(cookieParser())


  // middleware
  expressApplicationConfig.use(loggerMiddleware);
  // app.use(trim)


  return expressApplicationConfig;
}

