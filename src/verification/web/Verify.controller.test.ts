import request from 'supertest'
import {StatusCodes} from "http-status-codes";
import {Application, raw} from "express";
import appServerConfig from "../../ApiGateway";


const appServer:Application = appServerConfig;
const PROTOCOL:string = process.env.PROTOCOL || 'http'
const HOSTNAME:string = process.env.HOSTNAME || 'localhost'
const PORT:string = process.env.PORT || '7004'

const testServer = appServer.listen(PORT, async () => {
  console.log( `Server running at ${PROTOCOL}://${HOSTNAME}:${PORT}` )
})

beforeAll(async () => {

})

describe('GET /api/v1/verification', () => {

  it("should return 200 & valid response", (done) => {

    request(testServer)
    .post(`/api/v1/verification/signature`)
    //.expect('Content-Type', /json/)
    .expect(StatusCodes.OK).end((err, res) => {

      if (err) return done(err)
      expect(res.body).toMatchObject({"verified": true})
      done()

    });
  });

});