import MangaList from '../models/User.model.js'

// Obtener la lista de mangas de un usuario
export const getMangaList = async (req, res) => {
    const { userId } = req.params;
    try {
        const mangaList = await MangaList.findOne({ user: userId }).populate('mangas');
        if (!mangaList) {
            return res.status(404).json({ message: 'Manga list not found' });
        }
        res.status(200).json(mangaList);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Agregar un manga a la lista de un usuario
export const addMangaToList = async (req, res) => {
    const { userId } = req.params;
    const { mangaId } = req.body;
    try {
        let mangaList = await MangaList.findOne({ user: userId });
        if (!mangaList) {
            mangaList = new MangaList({ user: userId, mangas: [] });
        }
        if (mangaList.mangas.includes(mangaId)) {
            return res.status(400).json({ message: 'Manga already in list' });
        }
        mangaList.mangas.push(mangaId);
        await mangaList.save();
        res.status(200).json({ message: 'Manga added to list' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Eliminar un manga de la lista de un usuario
export const removeMangaFromList = async (req, res) => {
    const { userId } = req.params;
    const { mangaId } = req.body;
    try {
        const mangaList = await MangaList.findOne({ user: userId });
        if (!mangaList) {
            return res.status(404).json({ message: 'Manga list not found' });
        }
        mangaList.mangas = mangaList.mangas.filter(id => id.toString() !== mangaId);
        await mangaList.save();
        res.status(200).json({ message: 'Manga removed from list' });
    }
        catch (error) { 
        res.status(500).json({ message: 'Server error' });
    }
};

// Obtener el estado de un manga en la lista de un usuario
export const getMangaStatus = async (req, res) => {
    const { userId, mangaId } = req.params;
    try {
        const mangaList = await MangaList.findOne({ user: userId });
        if (!mangaList) {
            return res.status(404).json({ message: 'Manga list not found' });
        }
        const isInList = mangaList.mangas.includes(mangaId);
        res.status(200).json({ inList: isInList });
    }
        catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Vaciar la lista de mangas de un usuario
export const clearMangaList = async (req, res) => {
    const { userId } = req.params;
    try {
        const mangaList = await MangaList.findOne({ user: userId });
        if (!mangaList) {
            return res.status(404).json({ message: 'Manga list not found' });
        }
        mangaList.mangas = [];
        await mangaList.save();
        res.status(200).json({ message: 'Manga list cleared' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

