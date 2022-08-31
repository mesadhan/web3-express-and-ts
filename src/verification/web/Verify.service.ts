import {VerificationReq} from "../dto/VerificationReq";

export class VerifyService {

  verifyChecker(body:VerificationReq) {
    // need to add login here....

    return {verified: true}
  }

}

