import { UserList } from "../models/AnimeListEntry.model.js";

const añadirAnimeALista = async (req, res) => {
    const { userId, animeId, animeTitle, animeCoverImage, lista} = req.body;
    //lista deberia esperar un string para determinar si el anime esta completado, en proceso, plan to watch o dropped
    try{
        const userList = await UserList.findOne({ userId });
        if (!userList) {
            const newUserList = new UserList({
                userId,
                animeCompletado: lista === 'completado' ? [{ animeid: animeId, animeTitle, animeCoverImage }] : [],
                animeEnProgreso: lista === 'enProgreso' ? [{ animeid: animeId, animeTitle, animeCoverImage }] : [],
                animePlanToWatch: lista === 'planToWatch' ? [{ animeid: animeId, animeTitle, animeCoverImage }] : [],
                animeDropped: lista === 'dropped' ? [{ animeid: animeId, animeTitle, animeCoverImage }] : []
            });
            await newUserList.save();
            return res.status(201).json({ message: 'Anime added to the list successfully.' });
        }
        userList[lista].push({
            animeid: animeId,
            animeTitle,
            animeCoverImage
        });
        await userList.save();
        return res.status(200).json({ message: 'Anime added to the list successfully.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while adding the anime to the list.' });
    }
};

const obtenerListaUsuario = async (req, res) => {
    const { userId } = req.params;
    try {
        const userList = await UserList.findOne({ userId });
        if (!userList) {
            return res.status(404).json({ error: 'User list not found.' });
        }
        return res.status(200).json(userList);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while retrieving the user list.' });
    }
};

const eliminarAnimeDeLista = async (req, res) => {
    const { userId, animeId, lista } = req.body;
    //lista deberia esperar un string para determinar si el anime esta completado, en proceso, plan to watch o dropped
    try {
        const userList = await UserList.findOne({ userId });
        if (!userList) {
            return res.status(404).json({ error: 'User list not found.' });
        }
        if (lista !== 'animeCompletado' && lista !== 'animeEnProgreso' && lista !== 'animePlanToWatch' && lista !== 'animeDropped') {
            return res.status(400).json({ error: 'Invalid list name provided.' });
        }
        if (lista === 'animeCompletado' && !userList.animeCompletado.some(anime => anime.animeid === animeId)) {
            return res.status(404).json({ error: 'Anime not found in the completed list.' });
        }
        if (lista === 'animeEnProgreso' && !userList.animeEnProgreso.some(anime => anime.animeid === animeId)) {
            return res.status(404).json({ error: 'Anime not found in the in-progress list.' });
        }
        if (lista === 'animePlanToWatch' && !userList.animePlanToWatch.some(anime => anime.animeid === animeId)) {
            return res.status(404).json({ error: 'Anime not found in the plan to watch list.' });
        }
        if (lista === 'animeDropped' && !userList.animeDropped.some(anime => anime.animeid === animeId)) {
            return res.status(404).json({ error: 'Anime not found in the dropped list.' });
        }
        userList[lista] = userList[lista].filter(anime => anime.animeid !== animeId);
        await userList.save();
        return res.status(200).json({ message: 'Anime removed from the list successfully.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while removing the anime from the list.' });
    }
};

export { añadirAnimeALista, obtenerListaUsuario, eliminarAnimeDeLista };