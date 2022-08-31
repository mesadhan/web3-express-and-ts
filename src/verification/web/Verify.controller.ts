import {Request, response, Response, Router} from "express";
import {VerifyService} from "./Verify.service";
import {StatusCodes} from "http-status-codes";


const verifyController:Router = Router()
const verifyService:VerifyService = new VerifyService();




//Get all news
verifyController.post('/signature', async (req: Request, res: Response) => {

  let data = verifyService.verifyChecker(req,res);
  res.status(StatusCodes.OK).json(data)
})




export default verifyController;