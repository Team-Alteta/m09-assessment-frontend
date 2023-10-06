import { useLocation } from 'react-router-dom';
import useFindTopGames from '../hooks/useGames';

import GamesGrid from './GamesGrid';

function GamesDisplay() {
    const location = useLocation();

    const {year, singleplayer} = location.state;
    const games = useFindTopGames(year, singleplayer);
    return (
        <>
            <h1>TOP 10 GAMES</h1>
            <div>Stretch Goal: Filter</div>
            <GamesGrid games={games}/>
        </>
    )
}

export default GamesDisplay;
       
