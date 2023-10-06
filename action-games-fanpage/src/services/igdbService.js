import { BASE_URL } from './baseUrl';

function getYearInUnixTime(year){

    const date = new Date(`${year}.01.01`);

    return Math.floor(date.getTime() / 1000);
}


export async function findTopGames(year, singleplayer) {

    //Adding a year parameter and convert to unix
    const yearInUnix = getYearInUnixTime(year);

    const config = {
        method: 'POST',
        body: `
        fields name, 
        aggregated_rating, 
        aggregated_rating_count, 
        cover.image_id, 
        multiplayer_modes, 
        first_release_date, 
        summary, 
        themes, 
        rating, 
        rating_count, 
        total_rating, 
        screenshots.image_id, 
        websites.*; 
        
        where first_release_date >= ${yearInUnix} 
        & first_release_date < ${yearInUnix + 31536000}
        & themes = (1) 
        & ${singleplayer ? 'rating_count > 25' : 'rating_count > 0'} 
        & ${singleplayer ? 'game_modes = (1) & game_modes != (2)' : 'game_modes = (2)'}; 
        sort total_rating desc; 
        limit 10;
        `
    };

    const response = await fetch(BASE_URL + "/games", config);
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(
            new Error(`Unexpected status code ${response.status}`)
        );
    }
}
