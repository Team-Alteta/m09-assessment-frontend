import Card from 'react-bootstrap/Card';
function BodyLinks({ websites }) {
    // url (stretch goal), use websites - category 1 is the official
    return (
        <Card.Body>
            <Card.Link href="">Official</Card.Link>
            <Card.Link href="">Facebook</Card.Link>
            <Card.Link href="">Instagram</Card.Link>
            <Card.Link href="">Twitter</Card.Link>
            <Card.Link href="">Twitch</Card.Link>
            <Card.Link href="">YouTube</Card.Link>
        </Card.Body>
    );
}

export default BodyLinks;
