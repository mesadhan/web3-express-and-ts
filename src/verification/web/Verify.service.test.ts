import {VerifyService} from "./Verify.service";
import {VerificationReq} from "../dto/VerificationReq";
import {VerificationRes} from "../dto/VerificationRes";


test("it should pass", async () => {
  expect(false).toBe(false);
});

let payload: VerificationReq = {
  account: '0x42cfa96d0759aea866a4e73cfa521c15854508d5',
  signature: '0xe11369ec5377a303301ddf1bc99554a36101f445e0ed5be6c4da7e0cf8503e920f494bc0e6be0a13273c86ab1e3f198f78d8377fba0a56d35059ccb6de34ab6d1b'
}

test("wallet should be valid", async () => {
  const controller = new VerifyService();
  let response:VerificationRes = controller.verifyChecker(payload)
  expect(response?.verified).toBe(true);
});


test("wallet should be invalid", async () => {
  const controller = new VerifyService();
  let response:VerificationRes = controller.verifyChecker({
    account: '',
    signature: ''
  })
  expect(response?.verified).toBe(false);
});