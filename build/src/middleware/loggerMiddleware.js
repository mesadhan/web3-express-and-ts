"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const Logger_1 = __importDefault(require("../common/Logger"));
const loggerMiddleware = (request, response, next) => {
    console.log(`${request.method} ${request.path}  ${JSON.stringify(request.body)}`);
    Logger_1.default.debug("LogLevel.DEBUG", "Hello how aer you");
    next();
};
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=loggerMiddleware.js.map