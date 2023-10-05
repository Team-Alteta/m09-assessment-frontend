import { findTopGames } from '../services/igdbService';

function GamesDisplay() {
    findTopGames();
    return (
        <div>Games Display</div>
    )
}

export default GamesDisplay;
