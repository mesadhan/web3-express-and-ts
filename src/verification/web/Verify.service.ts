import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";

export class VerifyService {
  verifyChecker(req: Request, res: Response): void {
    res.status(StatusCodes.OK).json("news")
  }
}

