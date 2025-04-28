import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer'

import { CriaUserController } from "./controllers/user/CriaUserController";
import { LogaUserController } from "./controllers/user/LogaUserController";
import { DetalhesUserController } from "./controllers/user/DetalhesUserController";
import { ObtemUsersController } from "./controllers/user/ObtemUsersController";
import { estaAutenticado } from "./middlewares/estaAutenticado";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { AlteraSenhaUserController } from "./controllers/user/AlteraSenhaUserController";

import { CriaSeasonController } from "./controllers/season/CriaSeasonController";
import { AtualSeasonController } from "./controllers/season/AtualSeasonController";
import { DeletaSeasonController } from "./controllers/season/DeletaSeasonController";

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

// -- ROUTES USER --
router.post('/users', estaAutenticado, new CriaUserController().handle)
router.post('/sessao', new LogaUserController().handle)
router.get('/eu', estaAutenticado,  new DetalhesUserController().handle)
router.get('/users', estaAutenticado,  new ObtemUsersController().handle)
router.delete('/users', estaAutenticado, new DeleteUserController().handle)
router.put('/users', estaAutenticado, new AlteraSenhaUserController().handle)

// -- ROUTES SEASON --
router.post('/seasons', estaAutenticado, upload.single('file'), new CriaSeasonController().handle)
router.put('/seasons/atual', estaAutenticado, new AtualSeasonController().handle)
router.delete('/seasons', estaAutenticado, new DeletaSeasonController().handle)

export { router }