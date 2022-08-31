import {Request, response, Response, Router} from "express";
import {VerifyService} from "./Verify.service";


const verifyController:Router = Router()
const verifyService:VerifyService = new VerifyService();




//Get all news
verifyController.post('/signature', async (req: Request, res: Response) => {
  verifyService.verifyChecker(req,response)
})




export default verifyController;