const ProductService = require('../service/product.service');

class ProductController {
  async getAllProducts(req, res) {
    const productService = new ProductService();

    try {
      const { code, message } = await productService.getAllProducts();
      return res.status(code).json(message);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getProductById(req, res) {
    const productService = new ProductService();

    try {
      const { id } = req.params;
      const { code, message } = await productService.getProductById(id);
      return res.status(code).json(message);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async addProduct(req, res) {
    const productService = new ProductService();

    try {
      const { code, message } = await productService.addProduct(req.body);
      return res.status(code).json(message);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async updateProduct(req, res) {
    const productService = new ProductService();

    try {
      const { id } = req.params;
      const { code, message } = await productService.updateProduct(id, req.body);
      return res.status(code).json(message);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async deleteProduct(req, res) {
    const productService = new ProductService();

    try {
      const { id } = req.params;
      const { code, message } = await productService.deleteProduct(id);
      return res.status(code).json(message);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductController;