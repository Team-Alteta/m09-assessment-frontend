import Card from 'react-bootstrap/Card';

function GameCard({game}) {
    const imageId = game.screenshots ? game.screenshots[0].image_id : "";
    console.log(game);
    return (
        <Card>
            <Card.Img variant="top" src={`https://images.igdb.com/igdb/image/upload/t_720p/${imageId}.jpg`} />
            <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GameCard;
