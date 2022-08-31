"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const loggerMiddleware_1 = require("./middleware/loggerMiddleware");
const appConfig = () => {
    const expressApplicationConfig = (0, express_1.default)();
    const envFilePath = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
    console.log('Active envFilePath: ', envFilePath);
    dotenv_1.default.config({ path: path_1.default.resolve(__dirname, envFilePath) });
    expressApplicationConfig.use((0, cors_1.default)());
    expressApplicationConfig.use(express_1.default.json()); //Used to parse JSON bodies
    expressApplicationConfig.use(express_1.default.urlencoded({ extended: true }));
    expressApplicationConfig.use((0, cookie_parser_1.default)());
    // middleware
    expressApplicationConfig.use(loggerMiddleware_1.loggerMiddleware);
    // app.use(trim)
    return expressApplicationConfig;
};
exports.appConfig = appConfig;
//# sourceMappingURL=AppConfig.js.map