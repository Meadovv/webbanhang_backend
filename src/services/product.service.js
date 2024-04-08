const Product = require('../models/product.model');

class ProductService {
    static createProduct = async ({ userId, name, category, unit, price, description, number }) => {
        return await Product.create({ userId, name, category, unit, price, description, number });
    }

    static update = async () => {

    }

    static delete = async () => {

    }
}

module.exports = ProductService;