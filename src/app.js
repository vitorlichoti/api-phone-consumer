const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRouter);

module.exports = app;