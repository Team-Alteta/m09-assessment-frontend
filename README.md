# Action Games Fan Page

#### API Reference
- https://api-docs.igdb.com/?javascript

#### Possible Resources
- https://www.npmjs.com/package/react-responsive-carousel
- https://react-hot-toast.com/ ??? (Idk what to use this for, i just like it)

## Plan
    - Services
        - Games
            - Requests:
                - Get top 10 action games from a year
    - Components
        - (App)
        - Landing
        - Multiplayer Page
            - Displays all posts
        - Singleplayer Page
            - Displays all posts
        - Games Displayer
            - Acts as the "post" and is structured as a list of games


## Front-End
- Pages
    - Landing Page
    - Post Pages
        - Multiplayer
            - Calls the API to determine top multiplayer action games.
            - [Stretch] Comments
        - Singleplayer
            - Calls the API to determine the top singleplayer action games.
            - [Stretch] Comments
    - [Stretch] Additional genres (maybe)

## [Stretch]Back-End
- Comments

## [Stretch]Database
- Tables
    - Comments

## Syntax
### Screenshots
- Screenshots formatted like this:
    - https://images.igdb.com/igdb/image/upload/t_{size}/{image_id}.jpg
    - More info:
        - https://api-docs.igdb.com/?javascript#images
```html
<!-- Example -->
<img src="https://images.igdb.com/igdb/image/upload/t_720p/sc7e6p.jpg"
     alt="Markdown Monster icon"
     />
```

### Getting games data:
- url: https://api.igdb.com/v4/games
- Body: fields *, screenshots.*; where first_release_date >= 1672560000 & rating > 75 & themes >= 1; sort rating desc; limit 10;
    - (Filter to only data we need within the fields query)
### Games Object Example (Will Remove Uneeded Data Later)
```json
{
        "id": 235846,
        "artworks": [
            99629
        ],
        "category": 0,
        "cover": 287665,
        "created_at": 1675856081,
        "external_games": [
            2665490,
            2666730
        ],
        "first_release_date": 1684886400,
        "game_engines": [
            507
        ],
        "game_modes": [
            1
        ],
        "genres": [
            12,
            32
        ],
        "hypes": 1,
        "involved_companies": [
            204139
        ],
        "name": "Halls of Torment",
        "platforms": [
            3,
            6
        ],
        "rating": 99.39914628798219,
        "rating_count": 7,
        "release_dates": [
            484172,
            484173
        ],
        "screenshots": [
            {
                "id": 981420,
                "alpha_channel": false,
                "animated": false,
                "game": 235846,
                "height": 1080,
                "image_id": "scl19o",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/scl19o.jpg",
                "width": 1920,
                "checksum": "ae3d44ef-5171-e76f-9853-043e560a62d0"
            },
            {
                "id": 981422,
                "alpha_channel": false,
                "animated": false,
                "game": 235846,
                "height": 1080,
                "image_id": "scl19q",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/scl19q.jpg",
                "width": 1920,
                "checksum": "d72c564b-0994-ef50-6b28-428070de04af"
            },
            {
                "id": 981425,
                "alpha_channel": false,
                "animated": false,
                "game": 235846,
                "height": 1080,
                "image_id": "scl19t",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/scl19t.jpg",
                "width": 1920,
                "checksum": "e0437c13-bd56-3354-f10a-190da408f4e8"
            },
            {
                "id": 981428,
                "alpha_channel": false,
                "animated": false,
                "game": 235846,
                "height": 1080,
                "image_id": "scl19w",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/scl19w.jpg",
                "width": 1920,
                "checksum": "01ed0f97-379b-f647-bd43-643b3a2f9de4"
            },
            {
                "id": 981432,
                "alpha_channel": false,
                "animated": false,
                "game": 235846,
                "height": 1080,
                "image_id": "scl1a0",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/scl1a0.jpg",
                "width": 1920,
                "checksum": "b8c9e3ba-7d3d-d1be-b7e0-3566e8a5a4e2"
            },
            {
                "id": 981436,
                "alpha_channel": false,
                "animated": false,
                "game": 235846,
                "height": 1080,
                "image_id": "scl1a4",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/scl1a4.jpg",
                "width": 1920,
                "checksum": "b1adfdd5-0329-84c7-f1b2-29467d92cb6b"
            },
            {
                "id": 981440,
                "alpha_channel": false,
                "animated": false,
                "game": 235846,
                "height": 1080,
                "image_id": "scl1a8",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/scl1a8.jpg",
                "width": 1920,
                "checksum": "ff9d1711-c338-cfa5-f8f0-96f301f5692f"
            }
        ],
        "similar_games": [
            25311,
            28309,
            30245,
            80916,
            96217,
            105269,
            106987,
            107318,
            113360,
            113895
        ],
        "slug": "halls-of-torment",
        "status": 4,
        "summary": "Slay hordes of terrifying monsters in this casual roguelite action rpg. Descend into the Halls of Torment where the lords of the underworld await you. Treasures, magic trinkets, and a growing cast of heroes will grant you the power to vanquish the horrors from beyond. How long can you survive?",
        "tags": [
            1,
            268435468,
            268435488
        ],
        "themes": [
            1
        ],
        "total_rating": 99.39914628798219,
        "total_rating_count": 7,
        "updated_at": 1696288496,
        "url": "https://www.igdb.com/games/halls-of-torment",
        "videos": [
            95571
        ],
        "websites": [
            527679,
            531135,
            531136,
            531137,
            531138
        ],
        "checksum": "327df966-23bd-eca1-1726-88154ffd7e81",
        "language_supports": [
            619188,
            619189
        ]
    }
```