const ProducRepository = require('../../repository/product.repository');

class StorageByStructure {
  static async StructureWithDetailsKey(structure) {
    const productRepository = new ProducRepository();

    const productAdded = await productRepository.createProduct(structure, 'details');
    /*
      {
        name: "Xiaomi Redmi 9",
        details: {
            brand: "Xiaomi",
            model: "Redmi 9",
            color: "red"
        },
        price:  10000,
      }
    */

    return { code: 201, message: `Product named ${productAdded.id} was created` }
  }

  static async StructureWithDataArray(structure) {
    const productRepository = new ProducRepository();
    const productAdded = await productRepository.createProduct(structure, 'data');
    /*
        [  
      {
            name: "Xiaomi Redmi 9",
            brand: "Xiaomi",
            model: "Redmi 9",
            data: [
              {
                price:  10000,
                color: "red"
              },
              {
                price:  10000,
                color: "blue"
              }
            ]
      },
      {
            name: "Iphone 14 Pro",
            brand: "Iphone",
            model: "14 Pro",
            data: [
              {
                price:  30000,
                color: "silver"
              },
              {
                price:  30100,
                color: "gold"
              }
              ]
        }
      ]
    */
    return { code: 201, message: `Product named ${productAdded.id} was created` }
  }
}

module.exports = StorageByStructure;