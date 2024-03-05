const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.routes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../docs/swaggerOptions');

const CSS_URL = "https://cdn.bootcdn.net/ajax/libs/swagger-ui/5.6.2/swagger-ui-bundle.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customCss: CSS_URL }));

app.use(productRouter);

module.exports = app;