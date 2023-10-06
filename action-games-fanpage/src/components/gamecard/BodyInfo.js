import Card from 'react-bootstrap/Card';
function BodyInfo({ date, summary }) {
    return (
        <Card.Body>
            <Card.Text>{summary}</Card.Text>
        </Card.Body>
    );
}

export default BodyInfo;
