"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controller/ProductController"));
const routes = (0, express_1.Router)();
routes.get('/product/all', ProductController_1.default.index);
routes.get('/product/:id', ProductController_1.default.getProduct);
routes.get('/product/categorys/:category', ProductController_1.default.getProductsByCategory);
routes.post('/product/create', ProductController_1.default.createProduct);
routes.delete('/product/delete/:id', ProductController_1.default.deleteProduct);
routes.patch('/product/update/:id', ProductController_1.default.updateProduct);
exports.default = routes;
