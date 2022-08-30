"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.newUser = void 0;
const mssql_1 = __importStar(require("mssql"));
const config_1 = require("../config/config");
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { EMAIL, FIRSTNAME, LASTNAME, PASSWORD, CONFIRM_PWD } = req.body;
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        yield pool.request()
            .input('EMAIL', mssql_1.default.VarChar, EMAIL)
            .input('FIRSTNAME', mssql_1.default.VarChar, FIRSTNAME)
            .input('LASTNAME', mssql_1.default.VarChar, LASTNAME)
            .input('PASSWORD', mssql_1.default.VarChar, PASSWORD)
            .input('CONFIRM_PWD', mssql_1.default.VarChar, CONFIRM_PWD)
            .execute('createNewUser');
        return res.json({ message: 'User created successfully...' });
    }
    catch (error) {
        if (error instanceof mssql_1.RequestError) {
            res.json({
                message: error.message
            });
        }
    }
});
exports.newUser = newUser;
