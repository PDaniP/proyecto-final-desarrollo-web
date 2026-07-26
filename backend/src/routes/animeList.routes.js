import { añadirAnimeALista, obtenerListaUsuario, eliminarAnimeDeLista } from "../controllers/animeList.controller.js";
import express from "express";

const router = express.Router();

router.get('/:userId', obtenerListaUsuario);
router.post('/add', añadirAnimeALista);
router.post('/remove', eliminarAnimeDeLista);

export default router;