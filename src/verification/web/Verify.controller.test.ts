import request from 'supertest'
import {StatusCodes} from "http-status-codes";
import apiGateway from "../../ApiGateway";


beforeAll(async () => {

})

afterAll(async () => {

})


// group test using describe
describe("POST /api/v1/verification", () => {


  it("returns status code 200 if verify is true", async () => {
    const res = await request(apiGateway)
    .post(`/api/v1/verification/signature`)
    .send({ account:"string", signature:"string"} );    // params or body

    // console.log('res.body', res.body);
    expect(res.body).toMatchObject({"verified": true})
    expect(res.statusCode).toEqual(StatusCodes.OK);
  });

  // it("returns status code 200 if verify is false", async () => {
  //   const res = await request(apiGateway).post("/api/v1/verification"").send();
  //   expect(res.statusCode).toEqual(201);
  // });
});
