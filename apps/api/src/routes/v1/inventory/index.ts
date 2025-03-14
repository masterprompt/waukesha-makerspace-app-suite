import { Router } from 'express';
import items from './items.route';

const router = Router();

router.use('/inventory', items);

export default router;