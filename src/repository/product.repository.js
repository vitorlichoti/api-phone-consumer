const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class ProducRepository {
  async findAllProducts() {
    const products = await prisma.phone.findMany({
      include: {
        details: true
      }
    });
    return products;
  }

  async findProductById(id) {
    const product = await prisma.phone.findUnique({
      where: {
        id
      },
      include: {
        details: {
          select: {
            price: true,
            color: true
          }
        }
      }
    });

    return product;
  }

  async createProduct(product) {
    const newProduct = await prisma.phone.create({
      data: {
        name: product.name,
        brand: product.brand,
        model: product.model,
        details: {
          create: {
            color: product.color,
            price: product.price
          }
        }
      },
      include: {
        details: true
      }
    });

    return newProduct;
  }

  async updateProduct(id, product) {
    const updatedProduct = await prisma.phone.update({
      where: {
        id
      },
      data: {
        name: product.name,
        brand: product.brand,
        model: product.model,
        details: {
          updateMany: {
            where: {
              phoneId: id
            },
            data: {
              color: product.color,
              price: product.price
            }
          }
        }
      },
      include: {
        details: true
      }
    });

    return updatedProduct;
  }

  async deleteProduct(id) {
    const deleted = await prisma.phone.delete({
      where: {
        id
      }
    });

    return deleted;
  }
}

module.exports = ProducRepository;