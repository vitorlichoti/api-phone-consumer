const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.routes');

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('../docs/swaggerOptions');

const CSS = "https://cdn.bootcdn.net/ajax/libs/swagger-ui/5.6.2/swagger-ui.min.css"

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, { customCss: CSS }));


module.exports = app;