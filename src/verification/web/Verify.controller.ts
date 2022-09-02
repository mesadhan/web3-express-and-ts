import {VerifyService} from "./Verify.service";
import {StatusCodes} from "http-status-codes";
import {Request, Response, Router} from "express";
import {VerificationReq} from "../dto/VerificationReq";
import {VerificationRes} from "../dto/VerificationRes";
import {Method} from "../../common/Method.enum";
import {SRouter, SRequestMapping} from "~/common/SRequestMapping";


let verifyService: VerifyService = new VerifyService();


export class VerifyController {

  @SRequestMapping({method: Method.POST, name: "/signature"})
  public verifyWalletInfo(req: Request, res: Response) {

    let body: VerificationReq = req.body;
    let data: VerificationRes = verifyService.verifyChecker(body);
    res.status(StatusCodes.OK).json(data)

  }
}


export default SRouter;