"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controller/productController");
const router = (0, express_1.Router)();
router.post('/create', productController_1.createProduct);
router.get('/all', productController_1.getProducts);
router.post('/delete', productController_1.deleteProduct);
exports.default = router;
