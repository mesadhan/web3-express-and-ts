import winston, {Logger} from "winston";
import {Format} from "logform";


const {transports, format, createLogger} = winston
const {combine, printf} = format


const prettyJson: Format = printf(data => {
  let {timestamp, label, level, message, context, ...args} = data;

  if (message.constructor === Object) {
    message = JSON.stringify(message, null, 4)
  }

  message = `${timestamp} ${level} ${label || '-'} ${message}`
  // message = `${timestamp} ${level} ${label || '-'}:10 ${message}`  // filename:(10 error.stack)
  return message;
})



export const logger = (filename?: string): Logger => {
  let shortPath = filename ?? '';
  if (shortPath) {
    shortPath = shortPath.substring(shortPath.lastIndexOf("/src") + 1, shortPath.length);
  }

  return createLogger({
    level: process.env.WINSTON_LOGGING ?? 'info',
    exitOnError: false,
    format: combine(
        winston.format.label({label: shortPath}),
        format.colorize(),
        format.prettyPrint(),

        // format.splat(),
        // format.simple(),
        // format.ms(),
        // format.metadata({fillExcept: ['message', 'level', 'timestamp', 'label']}),
        format.align(),
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
        prettyJson
    ),
    defaultMeta: {service: 'web3-express-and-ts'},
    transports: [
      new transports.Console({level: 'debug'}),
      new transports.File({
        level: 'info',
        handleExceptions: true, filename: "logs/app.log"
      }),
    ],
  });
}