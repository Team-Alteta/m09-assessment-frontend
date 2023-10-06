import Card from 'react-bootstrap/Card';
function BodyInfo({ name, date }) {
    return (
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{date}</Card.Subtitle>
            <Card.Text>Placeholder text about the game</Card.Text>
        </Card.Body>
    );
}

export default BodyInfo;
