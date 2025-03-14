import { Request, Response, Router, NextFunction } from 'express';
import { version } from '../../package.json';

const router = Router();

router.get('/health', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      status: 'ok',
      version,
    });
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

export default router;