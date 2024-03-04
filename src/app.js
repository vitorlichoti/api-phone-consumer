const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.routes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../docs/swaggerOptions');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(productRouter);

module.exports = app;