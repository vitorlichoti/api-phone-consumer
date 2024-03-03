const express = require('express');

const ProductController = require('../controller/product.controller');
const VerifyIsAuth = require('../middlewares/verifyIsAuth');
const FieldsNewProductCheck = require('../middlewares/checkFieldsFromPost');

const productRouter = express.Router();

const productController = new ProductController();

// GET /api/product/ -> Returns the list of all available products
productRouter.get('/api/products', VerifyIsAuth.checkIfUserIsAuth, productController.getAllProducts);

// GET /api/product/:id -> Returns the details of a specific product based on the provided ID
productRouter.get('/api/products/:id', VerifyIsAuth.checkIfUserIsAuth, productController.getProductById);

// POST /api/product/ -> Adds a new product to the database
productRouter.post('/api/products', VerifyIsAuth.checkIfUserIsAuth, FieldsNewProductCheck.checkFieldsPostNewProduct, productController.addProduct);

// PUT /api/product/:id -> Updates the details of a specific product based on the provided ID
productRouter.put('/api/products/:id', VerifyIsAuth.checkIfUserIsAuth, FieldsNewProductCheck.checkFieldsPostNewProduct, productController.updateProduct);

// DELETE /api/product/:id -> Deletes a specific product based on the provided ID
productRouter.delete('/api/products/:id', VerifyIsAuth.checkIfUserIsAuth, productController.deleteProduct);

module.exports = productRouter;