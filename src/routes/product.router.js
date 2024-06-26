const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');

router.use(AuthMiddleware.authorize)
router.post('/create', ProductController.createProduct);

module.exports = router;