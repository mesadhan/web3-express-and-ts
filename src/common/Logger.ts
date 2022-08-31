// {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3
//   verbose: 4,
//   debug: 5,
//   silly: 6
// }

import winston, {Logger} from "winston";
import {Format} from "logform";

const prettyJson:Format = winston.format.printf(info => {
  if (info.message.constructor === Object) {
    info.message = JSON.stringify(info.message, null, 4)
  }
  return `${info.timestamp} ${info.label || '-'} ${info.level}: ${info.message}`
})

const logger:Logger = winston.createLogger({
  format: winston.format.combine(
      winston.format.colorize(),
      winston.format.prettyPrint(),
      winston.format.splat(),
      winston.format.simple(),
      winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
      prettyJson
  ),
  defaultMeta: {service: 'web3-express-and-ts'},
  transports: [new winston.transports.Console({})]
})

export default logger