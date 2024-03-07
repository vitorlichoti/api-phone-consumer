const ProducRepository = require('../repository/product.repository');
const StorageByStructure = require('./helper/StorageByStructure');

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

    if (Object.keys(product).includes('details')) {
      const resultStructure2 = await StorageByStructure.StructureWithDetailsKey(product);

      return resultStructure2;
    }

    if (product instanceof Array) {
      const resultStructure3 = await StorageByStructure.StructureWithDataArray(product, 'data');

      return resultStructure3
    }

    const productAddedstructure1 = await productRepository.createProduct(product);

    if (!productAddedstructure1) {
      return { code: 500, message: 'Error adding product' }
    }

    return { code: 201, message: `Product named ${productAddedstructure1.id} was created` }
  }

  async updateProduct(id, product) {
    const productRepository = new ProducRepository();

    if (product instanceof Array) {

      const productSanityDetail = product[0].data.filter((p) => p.id !== undefined)
      const newProductDetail = product[0].data.filter((p) => p.id === undefined)

      const productExistingDetail = {
        ...product[0],
        data: productSanityDetail
      }

      const productUpdated = await productRepository.updateProduct(id, productExistingDetail);

      if (newProductDetail.length > 0) {
        const createNewDetail = await productRepository.createNewDetailProduct(id, newProductDetail);
        if (!createNewDetail) {
          return { code: 500, message: 'Error updating detail product' }
        }
      }

      if (!productUpdated) {
        return { code: 500, message: 'Error updating product' }
      }

      return { code: 204, message: productUpdated }
    }

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