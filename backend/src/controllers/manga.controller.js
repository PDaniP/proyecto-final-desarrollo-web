import Manga from '../models/Manga.js';

//añadir manga a la base de datos
export const addManga = async (req, res) => {
    const { title, author, description, coverImage } = req.body;
    try {
        const newManga = new Manga({ title, author, description, coverImage });
        await newManga.save();
        res.status(201).json({ message: 'Manga added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

//obtener todos los mangas
export const getMangas = async (req, res) => {
    try {
        const mangas = await Manga.find();
        res.status(200).json(mangas);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

//obtener manga por id
export const getMangaById = async (req, res) => {
    const { mangaId } = req.params;
    try {
        const manga = await Manga.findById(mangaId);
        if (!manga) {
            return res.status(404).json({ message: 'Manga not found' });
        }
        res.status(200).json(manga);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export default { addManga, getMangas, getMangaById };