import { Router } from 'express';
import { getLastProducts } from '../controllers/historyController.js'

const router = Router();

router.get('/history', getLastProducts);

export default router;