import express from 'express';
import { addManga,getMangas, getMangaByID} from '../controllers/mangaController.js';


const router = express.Router()

router.post("/", addManga);
router.get("/", getMangas);
router.get("/:mangaId", getMangaById);



module.exports = router