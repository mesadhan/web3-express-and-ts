import {VerificationReq} from "../dto/VerificationReq";
import {SLogger} from "~/common/SLogger";




export class VerifyService {

  verifyChecker(body:VerificationReq) {
    SLogger.logf(__filename).info('service is calling');


    const {signature, account}:VerificationReq = body
    // console.log('signature', signature);


    try{
      let message = 'message'
      const ethUtil = require('ethereumjs-util')
      const sig = ethUtil.fromRpcSig(ethUtil.addHexPrefix(signature))
      const msg = ethUtil.hashPersonalMessage(Buffer.from(message, 'utf8'))
      const publicKey = ethUtil.ecrecover(msg, sig.v, sig.r, sig.s)
      const pubAddress = ethUtil.pubToAddress(publicKey)
      const addressFromSignature = ethUtil.addHexPrefix(pubAddress.toString('hex'))
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

