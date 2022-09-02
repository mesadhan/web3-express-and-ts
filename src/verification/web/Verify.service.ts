import {VerificationReq} from "../dto/VerificationReq";
import {SLogger} from "~/common/SLogger";




export class VerifyService {

  verifyChecker(body:VerificationReq) {
    SLogger.logf(__filename).info('service is calling');

    //todo: need to add login here...
    //...

    // nodejs web3 apis
    // const web3:any = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // const accounts = await ethereum.request({method: 'eth_accounts'});
    // console.log('msg', web3);
    // console.log('account', web3.eth.accounts); // Returns an empty array


    return {verified: true}
  }

}

