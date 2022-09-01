import {VerifyService} from "./Verify.service";
import {VerificationReq} from "../dto/VerificationReq";
import {VerificationRes} from "../dto/VerificationRes";


test("it should pass", async () => {
  expect(false).toBe(false);
});


test("should return true", async () => {
  const controller = new VerifyService();
  let body: VerificationReq = {
    account: '111',
    signature: ''
  }
  let response:VerificationRes = controller.verifyChecker(body)
  expect(response?.verified).toBe(true);
});