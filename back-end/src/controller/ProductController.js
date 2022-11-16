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
const Product_1 = require("../model/Product");
exports.default = {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Product_1.Product.find();
                res.status(201).json(product);
            }
            catch (error) {
                res.status(401).json(error);
            }
        });
    },
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, image, category, description } = req.body;
            const product = new Product_1.Product({
                name: name,
                price: price,
                category: category,
                image: image,
                description: description
            });
            try {
                yield product.save();
                res.status(201).json(product);
            }
            catch (error) {
                res.status(401).json(error);
            }
        });
    },
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield Product_1.Product.findOne({ _id: id });
            try {
                if (!product)
                    res.status(401).json('Produto não encontrado!');
                else {
                    const deletedProduct = yield Product_1.Product.deleteOne({ _id: id });
                    res.status(201).json(deletedProduct);
                }
            }
            catch (error) {
                res.status(401).json(error);
            }
        });
    },
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, price, category, image, description } = req.body;
            const data = {
                name: name,
                price: price,
                category: category,
                image: image,
                description: description
            };
            const product = yield Product_1.Product.findOne({ _id: id });
            try {
                if (!product)
                    res.status(401).json('Produto não encontrado!');
                else {
                    const updatedProduct = yield Product_1.Product.updateOne({ _id: id }, data);
                    res.status(201).json(updatedProduct);
                }
            }
            catch (error) {
                res.status(401).json(error);
            }
        });
    },
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const product = yield Product_1.Product.findOne({ _id: id });
                if (!product) {
                    res.status(401).json('Produto não encontrado!');
                }
                res.status(200).json(product);
            }
            catch (error) {
                res.status(401).json(error);
            }
        });
    },
    getProductsByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { category } = req.params;
            try {
                const product = yield Product_1.Product.find({ category: category }).limit(6);
                res.status(201).json(product);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
};
