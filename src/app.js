const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.routes');

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('../docs/swaggerOptions');

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


module.exports = app;