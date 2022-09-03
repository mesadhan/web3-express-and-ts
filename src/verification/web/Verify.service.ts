import {VerificationReq} from "../dto/VerificationReq";
import {SLogger} from "~/common/SLogger";
import {
  addHexPrefix,
  ecrecover,
  fromRpcSig,
  hashPersonalMessage,
  pubToAddress
} from "ethereumjs-util";




export class VerifyService {

  verifyChecker(body:VerificationReq) {
    SLogger.logf(__filename).info('service is calling');


    const {signature, account}:VerificationReq = body
    // console.log('signature', signature);


    try{
      let message = 'message'
      const sig = fromRpcSig(addHexPrefix(signature))
      const msg = hashPersonalMessage(Buffer.from(message, 'utf8'))
      const publicKey = ecrecover(msg, sig.v, sig.r, sig.s)
      const pubAddress = pubToAddress(publicKey)
      const addressFromSignature = addHexPrefix(pubAddress.toString('hex'))
      // console.log('addressFromSignature', addressFromSignature);

      if(account === addressFromSignature) {
        return {verified: true}
      }

    }catch (e){
      SLogger.logf(__filename).error('error while parsing signature');
    }

    return {verified: false}
  }



}

