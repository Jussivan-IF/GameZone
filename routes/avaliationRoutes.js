import express from 'express';
import {getAvaliationById, getAllAvaliations, createAvaliation, updateAvaliation, deleteAvaliation,} from '../controllers/avaliationController.js';

const router = express.Router();

router.get('/avaliations', getAllAvaliations);
router.get('/avaliations/:id', getAvaliationById);
router.post('/avaliations', createAvaliation);
router.put('/avaliations/:id', updateAvaliation);
router.delete('/avaliations/:id', deleteAvaliation);

export default router;