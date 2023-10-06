import { useLocation } from 'react-router-dom';
import useFindTopGames from '../hooks/useGames';

import GamesGrid from './GamesGrid';

function GamesDisplay() {
    const location = useLocation();

    const {year, singleplayer} = location.state;
    const games = useFindTopGames(year, singleplayer);
    console.log(games);
    return (
        <>
            <h1>TOP 10 {singleplayer ? 'SINGLEPLAYER' : 'MULTIPLAYER'} GAMES OF {year}</h1>
            <GamesGrid games={games}/>
        </>
    )
}

export default GamesDisplay;
