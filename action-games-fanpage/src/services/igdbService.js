import { BASE_URL } from './baseUrl';

export async function findTopGames() {
    const config = {
        method: 'POST',
        body: `
        fields *, screenshots.*; where first_release_date >= 1672560000 & rating > 75 & themes >= 1; sort rating desc; limit 10;
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
