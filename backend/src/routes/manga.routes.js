const express = require("express")
const Manga = require('../models/Manga')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const mangas = await Manga.find()
        res.json(mangas)
    } catch (error) {
        console.error("Error en GET /mangas", error)
        res.status(500).json({ mensaje: "Error al obtener mangas" })
    }
})

router.post("/", async (req, res) => {
    try {
        const manga = await Manga.create(req.body);
        res.status(201).json(manga);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear manga",
            error: error.message
        });
    }
});

module.exports = router