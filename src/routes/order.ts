import express from 'express';
import {
  getAllOrders,
  getOneOrder,
  InsertOrder,
  deleteOrder,
  updateOrder,
} from '../handlers/ordersHandler';

const router = express.Router();
router.use(express.json());
router.get('/', getAllOrders);
router.get('/:id', getOneOrder);
router.post('/', InsertOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);
export default router;
