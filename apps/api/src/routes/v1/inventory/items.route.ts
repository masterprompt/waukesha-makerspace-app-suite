import { Request, Response, Router, NextFunction } from 'express';

const router = Router();

router.get('/items', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json([]);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.get('/items/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.post('/items/', async (req: Request, res: Response) => {
  try {
    res.status(201).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.put('/items/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.delete('/items/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;