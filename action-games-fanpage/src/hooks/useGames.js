import { useState, useEffect } from 'react';
import { findTopGames } from '../services/igdbService';

function useFindTopGames(year, singleplayer) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        findTopGames(year, singleplayer)
            .then(setGames)
            .catch(error => {
                console.error(error);
            });
    }, [year, singleplayer]);

    return games;
}

export default useFindTopGames;
