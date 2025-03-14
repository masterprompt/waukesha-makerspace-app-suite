import { Router } from 'express';

import v1 from './v1';
import health from './health.route';

const router = Router();

router.use('/', v1);
router.use('/', health);

export default router;