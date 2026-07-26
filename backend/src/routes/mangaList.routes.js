import express from 'express';
import {addMangaToList,clearMangaList,getMangaList,removeMangaFromList} from '../controllers/mangaList.controller.js';


const router = express.Router()

router.get('/:userId', getMangaList);
router.post('/:userId/add', addMangaToList);
router.post('/:userId/remove', removeMangaFromList);
router.post('/:userId/clear', clearMangaList);

export default router