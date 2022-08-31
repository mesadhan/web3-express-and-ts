import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

export class VerifyService {

  verifyChecker(req: Request, res: Response) {

    // need to add login here....

    return {verified: true}
  }

}

