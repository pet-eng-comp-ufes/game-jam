import { Router } from "express";

import { CriaUserController } from "./controllers/user/CriaUserController";
import { LogaUserController } from "./controllers/user/LogaUserController";
import { DetalhesUserController } from "./controllers/user/DetalhesUserController";
import { estaAutenticado } from "./middlewares/estaAutenticado";

const router = Router()

// -- ROUTES USER --
router.post('/users', estaAutenticado, new CriaUserController().handle)
router.post('/sessao', new LogaUserController().handle)
router.get('/eu', estaAutenticado,  new DetalhesUserController().handle)

export { router }