import { Router } from 'express';
import { showProducts, searchProducts, getProduct } from '../controllers/productController.js'

const router = Router();

router.get('/products', showProducts);
router.get('/search', searchProducts);
router.get('/products/:id', getProduct)

export default router;