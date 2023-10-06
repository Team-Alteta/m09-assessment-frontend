import Card from 'react-bootstrap/Card';

function GameCard({game}) {
    const image = `https://images.igdb.com/igdb/image/upload/t_720p/${game.cover.image_id}.jpg`;
    const date = epochToDate(game.first_release_date);

    // aggregated_rating(critic) - aggre..rating_count
    // rating, rating_count (regular users)
    // url (stretch goal), use websites - category 1 is the official
    // stretch goal: slideshow of screenshots
    // stretch goal: themes
    console.log(game);
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>
                {date}
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

const epochToDate = (ts) => {
    const date = new Date(ts*1000);
    const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    }

    return date.toLocaleString("en-US", options);
}

export default GameCard;
