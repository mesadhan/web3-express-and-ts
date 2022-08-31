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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRequestMapping = exports.SRouter = void 0;
const express_1 = require("express");
const Method_enum_1 = require("./Method.enum");
const SRouter = (0, express_1.Router)();
exports.SRouter = SRouter;
const SRequestMapping = (params) => {
    return (target, memberName, propDes) => {
        console.log('msg-method', params);
        let path = params.name;
        switch (params.method) {
            case Method_enum_1.Method.GET:
                SRouter.get(path, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return propDes.value(req, res); }));
                break;
            case Method_enum_1.Method.POST:
                SRouter.post(path, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return propDes.value(req, res); }));
                break;
            case Method_enum_1.Method.PUT:
                SRouter.put(path, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return propDes.value(req, res); }));
                break;
            case Method_enum_1.Method.PATCH:
                SRouter.patch(path, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return propDes.value(req, res); }));
                break;
            case Method_enum_1.Method.DELETE:
                SRouter.put(path, (req, res) => __awaiter(void 0, void 0, void 0, function* () { return propDes.value(req, res); }));
                break;
            default:
                console.log('msg', '');
        }
        // console.logName', path);
        // console.log('target', target);
        // console.log('Class: memberName', memberName);
        // console.log('Class: PropertyDescriptor', propertyDescriptor);
        // propertyDescriptor.enumerable = value;
        // propDes.value(req, res); // execute that annotated method ex. verifyWalletInfo
    };
};
exports.SRequestMapping = SRequestMapping;
//# sourceMappingURL=SRequestMapping.js.map