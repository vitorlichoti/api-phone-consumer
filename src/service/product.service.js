const ProducRepository = require('../repository/product.repository');
const axios = require('axios');

class ProductService {
  async getAllProducts() {
    return { code: 200, message: 'Products' }
  }

  async getProductById(id) {
    return { code: 200, message: `Product ${id}` }
  }

  async addProduct(product) {
    return { code: 201, message: `Product named ${product.name} was created` }
  }

  async updateProduct(id, product) {
    return { code: 200, message: `Product ${id} updated` }
  }

  async deleteProduct(id) {
    return { code: 200, message: `Product ${id} deleted` }
  }
}

module.exports = ProductService;