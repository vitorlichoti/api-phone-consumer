const ProducRepository = require('../../repository/product.repository');

class StorageByStructure {
  static StructureWithDetailsKey(structure) {
    const productRepository = new ProducRepository();

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
  }

  static StructureWithDataArray(structure) {
    const productRepository = new ProducRepository();

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
  }
}

module.exports = StorageByStructure;