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
import { ObtemAtualSeasonController } from "./controllers/season/ObtemAtualSeasonController";
import { ObtemSeasonsController } from "./controllers/season/ObtemSeasonsController";
import { ObtemSeasonsComJogosController } from "./controllers/season/ObtemSeasonsComJogosController";
import { AbreInscricaoSeasonController } from "./controllers/season/AbreInscricaoSeasonController";
import { FechaInscricaoSeasonController } from "./controllers/season/FechaInscricaoSeasonController";

import { CriaJogoController } from "./controllers/jogo/CriaJogoController";
import { DeletaJogoController } from "./controllers/jogo/DeletaJogoController";

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
router.delete('/seasons', estaAutenticado, new DeletaSeasonController().handle)
router.get('/seasons', estaAutenticado, new ObtemSeasonsController().handle)
router.get('/seasonsComJogos', new ObtemSeasonsComJogosController().handle)
router.put('/seasons/atual', estaAutenticado, new AtualSeasonController().handle)
router.get('/seasons/atual', new ObtemAtualSeasonController().handle)
router.put('/seasons/abreInscricao', estaAutenticado, new AbreInscricaoSeasonController().handle)
router.put('/seasons/fechaInscricao', estaAutenticado, new FechaInscricaoSeasonController().handle)

// -- ROUTES JOGO --
router.post('/jogos', estaAutenticado, upload.single('file'), new CriaJogoController().handle)
router.delete('/jogos', estaAutenticado, new DeletaJogoController().handle)

export { router }