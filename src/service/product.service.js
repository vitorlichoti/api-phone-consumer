const ProducRepository = require('../repository/product.repository');
const axios = require('axios');

class ProductService {
  async getAllProducts() {
    const productRepository = new ProducRepository();
    const products = await productRepository.findAllProducts();

    if (products.length === 0) {
      return { code: 404, message: 'No products found' }
    }

    return { code: 200, message: products }
  }

  async getProductById(id) {
    const productRepository = new ProducRepository();
    const productFound = await productRepository.findProductById(id);

    if (!productFound) {
      return { code: 404, message: `Product with id ${id} not found` }
    }

    return { code: 200, message: productFound }
  }

  async addProduct(product) {
    const productRepository = new ProducRepository();
    const productAdded = await productRepository.createProduct(product);

    if (!productAdded) {
      return { code: 500, message: 'Error adding product' }
    }

    return { code: 201, message: `Product named ${productAdded.id} was created` }
  }

  async updateProduct(id, product) {
    const productRepository = new ProducRepository();
    const productUpdated = await productRepository.updateProduct(id, product);

    if (!productUpdated) {
      return { code: 500, message: 'Error updating product' }
    }

    return { code: 204, message: productUpdated }
  }

  async deleteProduct(id) {
    const productRepository = new ProducRepository();
    const productRemoved = await productRepository.deleteProduct(id);

    if (!productRemoved) {
      return { code: 500, message: 'Error deleting product' }
    }

    return { code: 200, message: `Product ${id} deleted` }
  }
}

module.exports = ProductService;