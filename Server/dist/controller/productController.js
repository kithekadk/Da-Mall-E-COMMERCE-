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
exports.deleteProduct = exports.getProducts = exports.createProduct = void 0;
const mssql_1 = __importStar(require("mssql"));
const config_1 = require("../config/config");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { TITLE, PRICE, DESCRIPTION, CATEGORY, IMAGE, QUANTITY, RATING } = req.body;
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        yield pool.request()
            .input('TITLE', mssql_1.default.VarChar, TITLE)
            .input('PRICE', mssql_1.default.Numeric, PRICE)
            .input('DESCRIPTION', mssql_1.default.VarChar, DESCRIPTION)
            .input('CATEGORY', mssql_1.default.VarChar, CATEGORY)
            .input('IMAGE', mssql_1.default.VarChar, IMAGE)
            .input('QUANTITY', mssql_1.default.Numeric, QUANTITY)
            .execute('AddProduct');
        return res.json({ message: "Product added successfully" });
    }
    catch (error) {
        if (error instanceof mssql_1.RequestError) {
            res.status(500).json({
                message: error.message
            });
        }
    }
});
exports.createProduct = createProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        const products = (yield pool.request()
            .execute('getProducts')).recordset;
        return res.json(products);
    }
    catch (error) {
    }
});
exports.getProducts = getProducts;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { ID } = req.body;
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        yield pool.request()
            .input('ID', mssql_1.default.VarChar, ID)
            .execute('deleteProduct');
        return res.json({ message: "Product deleted successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteProduct = deleteProduct;
