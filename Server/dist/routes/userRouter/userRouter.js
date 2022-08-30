"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../controller/userController");
const userRouter = (0, express_1.Router)();
userRouter.post('/create', userController_1.newUser);
exports.default = userRouter;
