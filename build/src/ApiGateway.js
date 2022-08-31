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
// request timeout
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const Verify_controller_1 = __importDefault(require("./verification/web/Verify.controller"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const AppConfig_1 = require("./AppConfig");
const apiGateway = (0, AppConfig_1.appConfig)();
const BASE_UPLOAD_ROUTE_URL = process.env.BASE_UPLOAD_ROUTE_URL || '/uploads';
const BASE_UPLOAD_PATH = process.env.BASE_UPLOAD_PATH || 'uploads';
const BASE_STATIC_PATH = process.env.BASE_STATIC_PATH || 'public';
const REQUEST_TIMEOUT_MSEC = Number(process.env.REQUEST_TIMEOUT_MSEC) || 120000000;
apiGateway.use((req, res, next) => {
    res.setTimeout(REQUEST_TIMEOUT_MSEC);
    next();
});
const routePrefix = '/api/v1';
apiGateway.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(http_status_codes_1.StatusCodes.OK).json({ status: true, message: 'Web3 Backend Up & Running' });
}));
/************  Here PUT ALL THE API SERVICES ********** */
apiGateway.use(`${routePrefix}/verification`, Verify_controller_1.default);
// enable files upload
apiGateway.use((0, express_fileupload_1.default)({ createParentPath: true }));
apiGateway.use(express_1.default.static(BASE_STATIC_PATH));
apiGateway.use(BASE_UPLOAD_ROUTE_URL, express_1.default.static(BASE_UPLOAD_PATH));
apiGateway.use(BASE_UPLOAD_ROUTE_URL, express_1.default.static(path_1.default.join(__dirname, BASE_UPLOAD_PATH)));
exports.default = apiGateway;
//# sourceMappingURL=ApiGateway.js.map