"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const http_status_codes_1 = require("http-status-codes");
const server_1 = require("../../server");
// const appServer:Application = appServerConfig;
// const PROTOCOL:string = process.env.PROTOCOL || 'http'
// const HOSTNAME:string = process.env.HOSTNAME || 'localhost'
// const PORT:string = process.env.PORT || '7004'
//
// const testServer = appServer.listen(PORT, async () => {
//   console.log( `Server running at ${PROTOCOL}://${HOSTNAME}:${PORT}` )
// })
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
}));
describe('GET /api/v1/verification', () => {
    it("should return 200 & valid response", (done) => {
        (0, supertest_1.default)(server_1.appUpAndRunServer)
            .post(`/api/v1/verification/signature`)
            //.expect('Content-Type', /json/)
            .expect(http_status_codes_1.StatusCodes.OK).end((err, res) => {
            if (err)
                return done(err);
            expect(res.body).toMatchObject({ "verified": true });
            done();
        });
    });
});
//# sourceMappingURL=Verify.controller.test.js.map