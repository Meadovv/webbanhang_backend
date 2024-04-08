const ProductService = require('../services/product.service');

class ProductController {
    static createProduct = async (req, res) => {
        try {
            const product = await ProductService.createProduct({
                userId: req.jwt_decoded.userId,
                ...req.body
            });
            if(!product) {
                return res.status(400).json({ success: false, message: 'Create product failed' });
            }
            return res.status(201).json({ success: true, product: product });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = ProductController;