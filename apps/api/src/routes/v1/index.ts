import { Router } from 'express';
import inventory from './inventory';

const router = Router();

router.use('/v1', inventory);

export default router;