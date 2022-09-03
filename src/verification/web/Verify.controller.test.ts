import request from 'supertest'
import {StatusCodes} from "http-status-codes";
import apiGateway from "../../ApiGateway";
import {VerificationReq} from "~/verification/dto/VerificationReq";


beforeAll(async () => {

})

afterAll(async () => {

})

let payload: VerificationReq = {
  account: '0x42cfa96d0759aea866a4e73cfa521c15854508d5',
  signature: '0xe11369ec5377a303301ddf1bc99554a36101f445e0ed5be6c4da7e0cf8503e920f494bc0e6be0a13273c86ab1e3f198f78d8377fba0a56d35059ccb6de34ab6d1b'
}

// group test using describe
describe("POST /api/v1/verification", () => {


  it("returns status code 200 if verify is true", async () => {


    const res = await request(apiGateway)
    .post(`/api/v1/verification/signature`)
    .send(payload);    // params or body

    console.log('res.body', res.body);
    expect(res.body).toMatchObject({verified: true})
    expect(res.statusCode).toEqual(StatusCodes.OK);
  });

  // it("returns status code 200 if verify is false", async () => {
  //   const res = await request(apiGateway).post("/api/v1/verification"").send();
  //   expect(res.statusCode).toEqual(201);
  // });
});
