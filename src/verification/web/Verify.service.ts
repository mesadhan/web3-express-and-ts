import {VerificationReq} from "../dto/VerificationReq";
import {SLogger} from "../../common/SLogger";


export class VerifyService {

  verifyChecker(body:VerificationReq) {
    SLogger.logf(__filename).info('service is calling');

    //todo: need to add login here...
    //...


    return {verified: true}
  }

}

