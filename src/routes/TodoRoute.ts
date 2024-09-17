import express, { Request, Response, Router } from 'express';

const router = Router();

router.get('/todo', (req: Request, res: Response) => {
    res.send('Hello it from TodoRoute');
});

export default router;