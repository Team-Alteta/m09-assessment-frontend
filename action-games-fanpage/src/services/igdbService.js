import { BASE_URL } from './baseUrl';

export async function findTopGames() {
    const endPointUrl = BASE_URL + '/multiquery';

    const config = {
        method: 'POST',
        headers: {
            'Client-ID': `${process.env.IGDB_ID}`,
            'Authorization': `${process.env.IGDB_KEY}`,
        },
        body: `
            query genres "Genres" {
                fields name id;
                limit 100;
            };
        `
    };
        
    const response = await fetch(endPointUrl, config);
}
