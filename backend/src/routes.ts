import { Router, Request, Response } from "express";

const router = Router()

router.get('/teste', (req: Request, res: Response): any => {
    return res.json({ok: true})
})

export { router }