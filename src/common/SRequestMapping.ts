import {Request, Response, Router} from "express";
import {RequestParam} from "./RequestParam";
import {Method} from "./Method.enum";
import {SLogger} from "./SLogger";

const SRouter: Router = Router()


const SRequestMapping: Function = (params: RequestParam) => {
  return (target: object, memberName: string, propDes: PropertyDescriptor) => {
    // console.log('init-request-mapper', params);

    let path: string = params.name;

    switch (params.method) {
      case Method.GET:
        SRouter.get(path, async (req: Request, res: Response) => propDes.value(req, res));
        break;
      case Method.POST:
        SRouter.post(path, async (req: Request, res: Response) => propDes.value(req, res))
        break;
      case Method.PUT:
        SRouter.put(path, async (req: Request, res: Response) => propDes.value(req, res));
        break;
      case Method.PATCH:
        SRouter.patch(path, async (req: Request, res: Response) => propDes.value(req, res));
        break;
      case Method.DELETE:
        SRouter.put(path, async (req: Request, res: Response) => propDes.value(req, res));
        break;
      default:
        SLogger.log.warn(`NO Request mapping found`)
    }

    // console.logName', path);
    // console.log('target', target);
    // console.log('Class: memberName', memberName);
    // console.log('Class: PropertyDescriptor', propertyDescriptor);
    // propertyDescriptor.enumerable = value;
    // propDes.value(req, res); // execute that annotated method ex. verifyWalletInfo
  }
}

export {
  SRouter, SRequestMapping
}