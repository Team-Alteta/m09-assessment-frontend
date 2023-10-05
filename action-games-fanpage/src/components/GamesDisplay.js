import useFindTopGames from '../hooks/useGames';

import GamesGrid from './GamesGrid';

function GamesDisplay() {
    const games = useFindTopGames();

    return (
        <>
            <h1>TOP 10 GAMES</h1>
            <div>Stretch Goal: Filter</div>
            <GamesGrid games={games}/>
        </>
    )
}

export default GamesDisplay;
