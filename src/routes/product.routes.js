const express = require('express');

const ProductController = require('../controller/product.controller');
const VerifyIsAuth = require('../middlewares/verifyIsAuth');
const FieldsNewProductCheck = require('../middlewares/checkFieldsFromPost');

const productRouter = express.Router();

const productController = new ProductController();

/**
 * @swagger
 * /api/auth/products:
 *   get:
 *     summary: Return all products.
 *     description: Return all products storage in database.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns array with products.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: Not found. No products in database
 */
productRouter.get('/api/products', VerifyIsAuth.checkIfUserIsAuth, productController.getAllProducts);

/**
 * @swagger
 * /api/auth/products/{id}:
 *   get:
 *     summary: Return product by id.
 *     description: Return just product that contains id passed by parameter.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Returns a product.
 *       401:
 *         description: Unauthorized.
 */
productRouter.get('/api/products/:id', VerifyIsAuth.checkIfUserIsAuth, productController.getProductById);

/**
 * @swagger
 * /api/auth/products:
 *   post:
 *     summary: Post new product.
 *     description: Post new product and store in DB.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               brand:
 *                 type: string
 *               price:
 *                 type: number
 *               model:
 *                 type: string
 *               color:
 *                 type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       201:
 *         description: Product created with success.
 *       400:
 *         description: Bad request. Check if all fields are correct and try again.
 *       401:
 *         description: Unauthorized.
 */
productRouter.post('/api/products', VerifyIsAuth.checkIfUserIsAuth, FieldsNewProductCheck.checkFieldsPostNewProduct, productController.addProduct);

/**
 * @swagger
 * /api/auth/products/{id}:
 *   put:
 *     summary: Update product by ID.
 *     description: Update product information in the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               brand:
 *                 type: string
 *               price:
 *                 type: number
 *               model:
 *                 type: string
 *               color:
 *                 type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       400:
 *         description: Bad request. Check if all fields are correct and try again.
 *       401:
 *         description: Unauthorized.
 */
productRouter.put('/api/products/:id', VerifyIsAuth.checkIfUserIsAuth, FieldsNewProductCheck.checkFieldsPutProduct, productController.updateProduct);

/**
 * @swagger
 * /api/auth/products/{id}:
 *   delete:
 *     summary: Delete product by id.
 *     description: Delete product by id passed by parameter.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Success deleted.
 *       401:
 *         description: Unauthorized.
 */
productRouter.delete('/api/products/:id', VerifyIsAuth.checkIfUserIsAuth, productController.deleteProduct);

module.exports = productRouter;