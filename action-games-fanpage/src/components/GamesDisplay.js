import { findTopGames } from '../services/igdbService';

function GamesDisplay() {
    const games = findTopGames(2023, false);
    console.log(games);
    return (
        <div>Games Display</div>
    )
}

export default GamesDisplay;
