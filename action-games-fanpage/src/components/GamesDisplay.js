import { findTopGames } from '../services/igdbService';

function GamesDisplay() {
    const games = findTopGames();
    console.log(games);
    return (
        <div>Games Display</div>
    )
}

export default GamesDisplay;
