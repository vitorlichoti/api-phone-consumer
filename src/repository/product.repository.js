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

  async createProduct(product, flag) {
    if (flag === 'details') {
      const newProduct = await prisma.phone.create({
        data: {
          name: product.name,
          brand: product.details.brand,
          model: product.details.model,
          details: {
            create: {
              color: product.details.color,
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

    if (flag === 'data') {
      product.forEach(async (p) => {
        await prisma.phone.create({
          data: {
            name: p.name,
            brand: p.brand,
            model: p.model,
            details: {
              createMany: {
                data: p.data
              }
            }
          },
          include: {
            details: true
          }
        });
      });

      return { newProduct: 'created' };
    }

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
          updateMany: product.data.map((detail) => {
            return {
              where: {
                id: detail.id
              },
              data: {
                color: detail.color,
                price: detail.price
              }
            }
          })
        }
      },
      include: {
        details: true
      }
    });

    return updatedProduct;
  }

  async createNewDetailProduct(id, newDetail) {
    const detailData = newDetail.map((detail) => ({
      phoneId: id,
      color: detail.color,
      price: detail.price
    }));

    const newDetailProduct = await prisma.detail.createMany({
      data: detailData,
      skipDuplicates: true
    });
    return newDetailProduct;
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