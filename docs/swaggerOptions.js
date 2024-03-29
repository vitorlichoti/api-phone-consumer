const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RESTFULL API Documentation',
      version: '1.0.0',
      description: 'This document describes the routes and functionalities of the RESTful API for product management.',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: "My API Documentation",
        url: 'https://api-phone-consumer.vercel.app',
      },
    ],
  },
  apis: ['src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;