const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.routes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../docs/swaggerOptions');

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customCss: CSS_URL }));

app.use(productRouter);

module.exports = app;