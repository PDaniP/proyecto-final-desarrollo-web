import express from 'express';
import { addManga,getMangas, getMangaById } from '../controllers/manga.controller.js';


const router = express.Router()

router.post("/", addManga);
router.get("/", getMangas);
router.get("/:mangaId", getMangaById);



export default router