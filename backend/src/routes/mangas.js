import { Router } from "express";
import { Manga } from "../models/Manga.js";

const router = Router();

// GET todas
router.get("/", async (_req, res, next) => {
  try {
    const lista = await Manga.find().sort({ updatedAt: -1 });
    res.json(lista);
  } catch (e) {
    next(e);
  }
});

// GET una por id
router.get("/:id", async (req, res, next) => {
  try {
    const doc = await Manga.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: "No encontrado" });
    res.json(doc);
  } catch (e) {
    next(e);
  }
});

// POST crear
router.post("/", async (req, res, next) => {
  try {
    const nuevo = new Manga(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (e) {
    if (e.name === "ValidationError") {
      return res.status(400).json({ error: e.message });
    }
    next(e);
  }
});

// PUT actualizar
router.put("/:id", async (req, res, next) => {
  try {
    const actualizado = await Manga.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!actualizado) return res.status(404).json({ error: "No encontrado" });
    res.json(actualizado);
  } catch (e) {
    if (e.name === "ValidationError") {
      return res.status(400).json({ error: e.message });
    }
    next(e);
  }
});

// DELETE borrar
router.delete("/:id", async (req, res, next) => {
  try {
    const borrado = await Manga.findByIdAndDelete(req.params.id);
    if (!borrado) return res.status(404).json({ error: "No encontrado" });
    res.json({ ok: true });
  } catch (e) {
    next(e);
  }
});

export default router;
