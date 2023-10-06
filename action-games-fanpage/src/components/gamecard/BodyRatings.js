import Card from 'react-bootstrap/Card';
function BodyRatings({ userRating, userCount, criticRating, criticCount}) {
    return (
        <Card.Body>
            <Card.Text>critic aggregated_rating, critic aggregated_rating_count</Card.Text>
            <Card.Text>user rating, user rating_count</Card.Text>
        </Card.Body>
    );
}

export default BodyRatings;
