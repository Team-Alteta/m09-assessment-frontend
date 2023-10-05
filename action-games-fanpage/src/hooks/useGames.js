import { useState, useEffect } from 'react';
import { findTopGames } from '../services/igdbService';

function useFindTopGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        findTopGames()
            .then(setGames)
            .catch(error => {
                console.error(error);
            });
    }, []);

    return games;
}

export default useFindTopGames;
