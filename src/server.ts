import appServerConfig from "./ApiGateway";
import {Application} from "express";

const appServer:Application = appServerConfig;

const PROTOCOL:string = process.env.PROTOCOL || 'http'
const HOSTNAME:string = process.env.HOSTNAME || 'localhost'
const PORT:string = process.env.PORT || '7001'


export const appUpAndRunServer = appServer.listen(PORT, async () => {
  console.log( `Server running at ${PROTOCOL}://${HOSTNAME}:${PORT}` )
})
