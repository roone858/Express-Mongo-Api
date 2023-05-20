import express from 'express';
import {
  getAllProducts,
  getOneProduct,
  InsertProduct,
  deleteProduct,
  updateProduct,
} from '../handlers/productsHandler';

const router = express.Router();
router.use(express.json());
router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.post('/', InsertProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
export default router;
