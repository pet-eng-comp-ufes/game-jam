import { Router } from "express";

import { CriaUserController } from "./controllers/user/CriaUserController";
import { LogaUserController } from "./controllers/user/LogaUserController";
import { DetalhesUserController } from "./controllers/user/DetalhesUserController";
import { ObtemUsersController } from "./controllers/user/ObtemUsersController";
import { estaAutenticado } from "./middlewares/estaAutenticado";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { AlteraSenhaUserController } from "./controllers/user/AlteraSenhaUserController";

const router = Router()

// -- ROUTES USER --
router.post('/users', estaAutenticado, new CriaUserController().handle)
router.post('/sessao', new LogaUserController().handle)
router.get('/eu', estaAutenticado,  new DetalhesUserController().handle)
router.get('/users', estaAutenticado,  new ObtemUsersController().handle)
router.delete('/users', estaAutenticado, new DeleteUserController().handle)
router.put('/users', estaAutenticado, new AlteraSenhaUserController().handle)

export { router }