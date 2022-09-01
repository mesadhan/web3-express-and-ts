import {logger} from "./Logger";
import {Logger} from "winston";

export class SLogger {
  static log:Logger = logger()
  static logf = (filename:string) => {
    return logger(filename)
  }
}