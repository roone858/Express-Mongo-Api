import express from 'express';
import {
  getAllModerators,
  getOneModerator,
  InsertModerator,
  deleteModerator,
  updateModerator,
} from '../handlers/moderatorsHandler';

const router = express.Router();

router.get('/', getAllModerators);
router.get('/:id', getOneModerator);
router.post('/', InsertModerator);
router.put('/:id', updateModerator);
router.delete('/:id', deleteModerator);
export default router;
