import ReadMore from '../ReadMore';
import Card from 'react-bootstrap/Card';
function BodyInfo({ summary }) {
    return (
        <Card.Body>
            <ReadMore>
                {summary}
            </ReadMore>
        </Card.Body>
    );
            // {/* <Card.Text>{summary}</Card.Text> */}
}

export default BodyInfo;
