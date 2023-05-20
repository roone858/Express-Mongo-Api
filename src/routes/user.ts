import express from 'express';
import {
  getAllUsers,
  getOneUser,
  InsertUser,
  deleteUser,
  updateUser,
} from '../handlers/usersHandler';

const router = express.Router();
router.use(express.json());
router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', InsertUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;
