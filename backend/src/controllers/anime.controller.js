import { getAnimeList } from '../api/aniListAPI.js';

const obtenerAnimes = async (req, res) => {
    
        const { page} = req.query;
        const perPage = 50
        console.log(`Received request for anime list with page: ${page}, perPage: ${perPage}`);
        const animeList = await getAnimeList(page, perPage);
        if (!animeList) {
            console.error('No anime list found for the given parameters.');
            return res.status(404).json({ error: 'No anime list found' });
        }
        console.log('Anime list retrieved successfully:', animeList);
        res.status(200).json(animeList);
    
    
};

export { obtenerAnimes };