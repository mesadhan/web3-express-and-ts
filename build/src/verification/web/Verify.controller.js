"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyController = void 0;
const Verify_service_1 = require("./Verify.service");
const http_status_codes_1 = require("http-status-codes");
const Method_enum_1 = require("../../common/Method.enum");
const SRequestMapping_1 = require("../../common/SRequestMapping");
let verifyService = new Verify_service_1.VerifyService();
class VerifyController {
    verifyWalletInfo(req, res) {
        let body = req.body;
        let data = verifyService.verifyChecker(body);
        res.status(http_status_codes_1.StatusCodes.OK).json(data);
    }
}
__decorate([
    (0, SRequestMapping_1.SRequestMapping)({ method: Method_enum_1.Method.POST, name: "/signature" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VerifyController.prototype, "verifyWalletInfo", null);
exports.VerifyController = VerifyController;
exports.default = SRequestMapping_1.SRouter;
//# sourceMappingURL=Verify.controller.js.map